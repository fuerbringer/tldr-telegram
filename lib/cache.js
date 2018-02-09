'use strict'

const logger = require('./logger')
const redis = require('redis')
const client = redis.createClient({
  host: (process.env.REDIS_HOST ? process.env.REDIS_HOST : '127.0.0.1'),
  port: (process.env.REDIS_PORT ? process.env.REDIS_PORT : '6379')
})
client.on('error', error => logger.log('error', error))

module.exports = {
  getPage: (name, platform, next) => {
    client.get(`${platform}/${name}`, (error, reply) => {
      next(error, reply)
    })
  },
  cachePage: (name, platform, pageContents, next) => {
    client.set(`${platform}/${name}`, pageContents, 'EX', 3600)
    next()
  }
}
