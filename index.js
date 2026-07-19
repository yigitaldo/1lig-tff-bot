require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");


const bot = new TelegramBot(process.env.BOT_TOKEN);


bot.getMe()
.then((me)=>{
    console.log("Bot bulundu:");
    console.log(me.username);
});


bot.sendMessage(
    process.env.CHAT_ID,
    "🚀 Test mesajı"
)
.then(()=>{
    console.log("Mesaj gitti");
})
.catch(err=>{
    console.log("HATA:");
    console.log(err.message);
});
