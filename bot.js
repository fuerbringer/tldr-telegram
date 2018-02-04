'use strict'

require('dotenv').config()

const Telegraf = require('telegraf')
const tldr = require('./lib/tldr')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username

  const deliverPage = ctx => {
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
  }

  bot.hears(/\/tldr (.+)/i, ctx => deliverPage(ctx))
  bot.hears(new RegExp(`/tldr@${bot.options.username} (.+)`), ctx => deliverPage(ctx))
  bot.startPolling()
})
