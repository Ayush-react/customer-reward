import pino from "pino";

const logger = pino({
  browser: {
    serialize: true
  },
  level: "debug",
  transmit: {
    send: (level, logEvent) => {
      console.log([{level}], logEvent);
    }
  }
});

export default logger;