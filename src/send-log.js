const winston = require("winston");
const { ElasticsearchTransport } = require("winston-elasticsearch");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new ElasticsearchTransport({
      level: "info",
      index: "my-app-logs",
      clientOpts: { node: "http://elasticsearch-server:9200" },
    }),
  ],
});

// Use the logger to send logs
logger.info("This is an info log message");
