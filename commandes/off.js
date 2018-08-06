const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {
    
    if (message.content.startsWith(prefix + "crash")) {
    if(message.author.id == "247344130798256130"){
    bot.destroy();
    process.exit()
    message.author.send("Le bot a bien été coupé.")
    message.delete()
  }};

}
module.exports.help = {
    name: "off"
}