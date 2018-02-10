'use strict'

require('dotenv').config()

const _ = require('underscore')
const Telegraf = require('telegraf')
const tldr = require('./lib/tldr')
const logger = require('./lib/logger')
const bot = new Telegraf(process.env.BOT_TOKEN, {
  username: process.env.BOT_USERNAME
})

const commands = {
  tldr: function(ctx) {
    // Pattern match for one or more commands and filter to avoid duplicates
    const commands = _.uniq(ctx.message.text.match(/[\w+-]+\/[\w+-]+/g))
    if (commands && commands.length) {
      commands.map(parameter => {
        const [platform, page] = parameter.split('/')
        tldr.fetchPage(page, platform, (error, contents) => {
          if (contents) {
            return ctx.replyWithMarkdown(contents)
          }
          if (error) {
            logger.log('error', error)
          }
          logger.info('Could not deliver a requested page')
          return ctx.replyWithMarkdown(`Sorry, \`${page}\` couldn't be found in \`${platform}\``)
        })
      })
    } else {
      return this.start(ctx, false) // Show instructions instead of just nothing
    }
  },
  start: function(ctx, greet = true) {
    const startMessage =
      (greet ? `Hi, I'm *@${process.env.BOT_USERNAME}*.\n` : '') +
      'You can look up commands with:\n' +
      '`/tldr <platform>/<command>`\n\n' +
      '*Examples:*\n' +
      '`/tldr common/tldr`\n' +
      '`/tldr linux/pacaur`\n' +
      '`/tldr common/sftp linux/arp-scan`\n'
    return ctx.replyWithMarkdown(startMessage)
  }
}

// Accept bot commands once Telegraf is ready
bot.telegram.getMe().then(botInfo => {
  logger.info(`tldr-telegram started listening on @${botInfo.username}`)
  bot.command('tldr', ctx => commands.tldr(ctx))
  bot.command('start', ctx => commands.start(ctx))
  bot.startPolling()
})

bot.catch(error => logger.log('error', error))
