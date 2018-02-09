'use strict'

const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format


const loggerFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
})

module.exports = createLogger({
  transports: [
    new transports.Console({
      format: combine(
        label({ label: process.env.BOT_USERNAME }),
        timestamp(),
        loggerFormat
      )
    }),
    new transports.File({
      filename: process.env.LOG_FILE ? process.env.LOG_FILE : 'combined.log'
    })
  ]
})
