// Libs
const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const args = require("args");
const date = new (require("format-date-time"))("HH:mm:ss");
const readline = require("readline");
const clear = require("console-clear");
const colors = require("colors");

// Costants
const DEFAULT_PORT = 1337;

// Functions
const trim = (str) => {
  return str.toString().replace(/^\s+|\s+$/g, "");
};

// Code
args.option(
  "port",
  "The port on which the server will be running",
  DEFAULT_PORT
);

const flags = args.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  if (["clear", "cls"].includes(input)) {
    clear(true);
    console.log(`🚀 remote-log`.bold.yellow + ` Console cleared!`);
  }
});

server.on("error", (err) => {
  console.log(`❌ server error:\n${err.stack}`.red);
  server.close();
});

server.on("message", (msg, rinfo) => {
  console.log(`${date.now()}`.yellow.bold + ` ${trim(msg) || "Empty message"}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(
    `🚀 remote-log`.bold.yellow +
      ` server listening on ${address.address}:${address.port}!`
  );
});

server.bind(flags.port);
