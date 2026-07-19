bot.getMe().then((me)=>{
    console.log(me);
});


bot.sendMessage(
    process.env.CHAT_ID,
    "🚀 Test mesajı"
)
.then(()=>{
    console.log("Mesaj gitti");
})
.catch(err=>{
    console.log(err.message);
});
