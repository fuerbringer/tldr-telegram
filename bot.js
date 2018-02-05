'use strict'

require('dotenv').config()

const Telegraf = require('telegraf')
const tldr = require('./lib/tldr')
const bot = new Telegraf(process.env.BOT_TOKEN, {username: process.env.BOT_USERNAME})

bot.telegram.getMe().then((botInfo) => {

  bot.command('tldr', ctx => {
    const [command, parameter] = ctx.message.text.toLowerCase().split(' ')
    const [platform, page] = parameter.split('/')
    tldr.fetchPage(page, platform, (error, contents) => {
      if (contents) {
        return ctx.replyWithMarkdown(contents)
      } else {
        return ctx.reply("Sorry that page couldn't be found")
        console.log(error)
      }
    })
  })

  bot.command('start', ctx => {
    const greeting = 'Hi, I\'m *@' + process.env.BOT_USERNAME + '*.\n' + 'You can look up commands with:\n`/tldr <platform>/<command>`\n\n*Examples:*\n`/tldr common/tldr`\n`/tldr linux/pacaur`'
    return ctx.replyWithMarkdown(greeting)
  })

  bot.startPolling()
})
