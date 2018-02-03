const Telegraf = require('telegraf')
const tldr = require('./lib/tldr')
const bot = new Telegraf(process.env.BOT_TOKEN)


bot.hears(/\/tldr (.+)/, ctx => {
  const [command, parameter] = ctx.message.text.toLowerCase().split(' ')
  const [platform, page] = parameter.split('/')
  tldr.fetchPage(page, platform, (error, contents) => {
    if (contents) {
      const pageContents = Buffer.from(contents.data.content, contents.data.encoding)
      return ctx.replyWithMarkdown(pageContents.toString())
    } else {
      return ctx.reply("Sorry that page couldn't be found")
      console.log(error)
    }
  })
})

bot.startPolling()
