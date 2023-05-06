const express=require("express")
const cors=require("cors")
const app=express()
const http=require("http")
const server=http.createServer(app)
const {SerialPort}=require("serialport")
const {ReadlineParser}=require("@serialport/parser-readline")
const port = new SerialPort({path: "COM3",baudRate: 115200,})
const mysql=require("mysql")
const pool=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "health_metrics_db",
})
app.use(cors())
const parser=port.pipe(new ReadlineParser({ delimiter: "\n" }))
let count = 0;
parser.on("data", (data) => {
  count++;
  if (count % 32 === 0) {
    pool.query(`INSERT INTO \`health_metrics_db\`.\`test\` (\`BPM\`, \`TIME\`) VALUES (${data.toString("hex").split("/")[0]}, CURRENT_TIMESTAMP())`,
      (err, rows, fields) => {
        console.log("got word from arduino:", data.toString("hex"));
        if (err) {
          throw err
        }
      }
    )
  }
})
port.on("open",()=>{console.log("serial port open")})
server.listen(8080, () => {console.log("listening on *:8080")})
app.get("/", (req, res) => {
  pool.query(`SELECT TIME, BPM FROM test`, (err, rows, fields) => {
    if (err) {
      throw err
    }
    var timeData = [];
    var bpmData = [];
    rows.forEach(row => {
      timeData.push(row.TIME);
      bpmData.push(row.BPM);
    });
    const data = {
      time: timeData,
      bpm: bpmData
    };
    console.log(data);
    res.status(200).json(data);
})});
app.post("/reset", (req, res) => {
  pool.query(`truncate table test`, (err, rows, fields) => {
    res.status(200).send('successfully executed truncate')
  })
})