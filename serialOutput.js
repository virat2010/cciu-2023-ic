const { SerialPort, ReadlineParser } = require('serialport')
const parser = new ReadlineParser()
const myPort = new SerialPort({
path: 'COM3',
baudRate: 9600,
dataBits: 8,
stopBits: 1,
parity: 'none',
});

myPort.pipe(parser)
parser.on('data', console.log)