'use strict'

require('dotenv').config()

const _ = require('underscore')
const Telegraf = require('telegraf')
const tldr = require('./lib/tldr')
const bot = new Telegraf(process.env.BOT_TOKEN, {
  username: process.env.BOT_USERNAME
})

const commands = {
  tldr: ctx => {
    // Pattern match for one or more commands and filter to avoid duplicates
    const commands = _.uniq(ctx.message.text.match(/[\w\+-]+\/[\w\+-]+/g))
    commands.map(parameter => {
      const [platform, page] = parameter.split('/')
      tldr.fetchPage(page, platform, (error, contents) => {
        if (contents) {
          return ctx.replyWithMarkdown(contents)
        }
        console.log(error)
        return ctx.reply("Sorry that page couldn't be found")
      })
    })
  },
  start: ctx => {
    const greeting = `Hi, I'm *@${process.env.BOT_USERNAME}*.\n`
      + 'You can look up commands with:\n'
      + '`/tldr <platform>/<command>`\n\n'
      + '*Examples:*\n'
      + '`/tldr common/tldr`\n'
      + '`/tldr linux/pacaur`\n'
      + '`/tldr common/sftp linux/arp-scan`\n'
    return ctx.replyWithMarkdown(greeting)
  }
}

// Accept bot commands once Telegraf is ready
bot.telegram.getMe().then(botInfo => {
  bot.command('tldr', ctx => commands.tldr(ctx))
  bot.command('start', ctx => commands.start(ctx))
  bot.startPolling()
})
