const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
console.log(
  "Web Server Started go to 'http://localhost:8080' in your Browser."
);
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const port = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});
const mysql = require("mysql");
const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "health_metrics_db",
});
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));
parser.on("data", (data) => {
  console.log("got word from arduino:", data.toString("hex"));
  pool.query(
    `INSERT INTO \`health_metrics_db\`.\`test\` (\`BPM\`, \`TIME\`) VALUES (${
      data.toString("hex").split("/")[0]
    }, CURRENT_TIMESTAMP())`,
    (err, rows, fields) => {
      if (err) {
        throw err;
      }
    }
  );
});
port.on("open", () => {
  console.log("serial port open");
});
server.listen(8080, () => {
  console.log("listening on *:8080");
});
app.get("/", (req, res) => {
  pool.query(`SELECT BPM,TIME FROM test`, (err, rows, fields) => {
    if (err) {
      throw err;
    }
    const values = {
      type: 'line',
      data: {
        datasets: [{
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          data: rows.map(row => {
            const timestamp = new Date(row.TIME);
            const formattedTimestamp = `${timestamp.getUTCFullYear()}-${(timestamp.getUTCMonth() + 1).toString().padStart(2, "0")}-${timestamp.getUTCDate().toString().padStart(2, "0")} ${timestamp.getUTCHours().toString().padStart(2, "0")}:${timestamp.getUTCMinutes().toString().padStart(2, "0")}:${timestamp.getUTCSeconds().toString().padStart(2, "0")}`;
            return {
              x: formattedTimestamp,
              y: row.BPM
            };
          })
        }]
      },
      options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
    };
    res.status(200).json(values);
  });
});