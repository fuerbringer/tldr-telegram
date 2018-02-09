const Telegraf = require('telegraf')
const tldr = require('./lib/tldr')
const app = new Telegraf(process.env.BOT_TOKEN)

/// /////////////////////////////////////////////////////////////////////////////
// TODO / IN PROGRESS

// tldr.fetchPage('feh', 'linux', (error, contents) => {
//  if(contents) {
//    const pageContents = Buffer.from(contents.data.content, contents.data.encoding)
//    console.log(pageContents.toString())
//  } else {
//    console.log('Sorry that page couldn\'t be found')
//    console.log(error)
//  }
// })

app.hears('tldr', ctx => {
  ctx.reply('Under development :>')
})

/* AWS Lambda handler function */
exports.handler = (event, context, callback) => {
  const tmp = JSON.parse(event.body) // get data passed to us
  app.handleUpdate(tmp) // make Telegraf process that data
  return callback(null, { // return something for webhook, so it doesn't try to send same stuff again
    statusCode: 200,
    body: ''
  })
}
