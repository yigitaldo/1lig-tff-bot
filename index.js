require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");


const bot = new TelegramBot(process.env.BOT_TOKEN);


bot.sendMessage(
process.env.CHAT_ID,
"🚀 TFF Bot çalışıyor!"
);
