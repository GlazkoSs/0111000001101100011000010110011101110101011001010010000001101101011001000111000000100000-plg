const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {
    
if(message.author.id == "247344130798256130" | "319148818010472448"){
if (message.content.split(" ")[0] == prefix + "say")
  {
      message.delete().catch(function() {return 0});
      return message.channel.send(message.content.split(" ").splice(1).join(" ")).catch(function() {return 0});
  }}

}
module.exports.help = {
    name: "say"
}