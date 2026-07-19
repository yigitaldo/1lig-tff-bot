require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const cheerio = require("cheerio");

const bot = new TelegramBot(process.env.BOT_TOKEN);

const CHAT_ID = process.env.CHAT_ID;


async function tffKontrol(){

    try {

        const url = "https://www.tff.org/default.aspx?pageID=130";

        const {data} = await axios.get(url,{
            headers:{
                "User-Agent":"Mozilla/5.0"
            }
        });


        const $ = cheerio.load(data);


        let haber = $("body").text();

        console.log("TFF kontrol edildi");


        if(haber.includes("Adana Demirspor")){

            bot.sendMessage(
                CHAT_ID,
                "🚨 TFF'de Adana Demirspor bulundu!"
            );

        }


    } catch(error){

        console.log(error.message);

    }

}


tffKontrol();


setInterval(()=>{
    tffKontrol();
}, 30 * 60 * 1000);
