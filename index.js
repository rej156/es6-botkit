import Botkit from 'botkit'
const controller = Botkit.slackbot()

const bot = controller.spawn({
  token: process.env.token
})

bot.startRTM((err, bot, payload) => {
  if(err) {throw new Error(err)}
})
