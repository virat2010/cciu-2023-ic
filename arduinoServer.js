const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
console.log("Web Server Started go to 'http://localhost:8080' in your Browser.");
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const port = new SerialPort({
    path: "COM3",
    baudRate: 9600
});
const mysql = require('mysql');
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'health_metrics_db',
});
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
parser.on('data', data => {
    console.log('got word from arduino:', data.toString("hex"));
    pool.query(`INSERT INTO \`health_metrics_db\`.\`test\` (\`BPM\`) VALUES (${data.toString('hex').split('/')[0]})`, (err, rows, fields) => {
        if(err){throw err};
    });
});
port.on("open", () => {
    console.log('serial port open');
})
server.listen(8080, () => {
    console.log("listening on *:8080");
});
app.get("/", (req, res) => {
    console.log(req)
    pool.query(`SELECT BPM FROM test`, (err, rows, fields) => {
        if(err){throw err;}
        const heartRates = rows.map(row => row.BPM);
        const mean = heartRates.reduce((total, rate) => total + rate, 0) / heartRates.length;
        const sortedRates = heartRates.sort();
        const middleIndex = Math.floor(sortedRates.length / 2);
        const median = sortedRates.length % 2 === 0 ? (sortedRates[middleIndex] + sortedRates[middleIndex - 1]) / 2 : sortedRates[middleIndex];
        const mode = heartRates.reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
        }, {});
        let modes = [];
        let maxCount = 0;
        for (const rate in mode) {
            if (mode[rate] > maxCount) {
                modes = [rate];
                maxCount = mode[rate];
            } else if (mode[rate] === maxCount) {
                modes.push(rate);
            }
        }
        const modeV = modes.length === heartRates.length ? "No mode" : modes.join(", ");
        const values = {
            "mean": mean,
            "median": median,
            "mode": modeV,
        }
        res.status(200).json(values);
    });
});