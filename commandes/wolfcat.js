const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {

    if(message.author.id == "247344130798256130" | "319148818010472448"){  
    if(message.content.startsWith(prefix + 'wolfcat')) {
           message.channel.send("<@155310387359776768> ton boss t'attend dans son cabinet !");
           message.delete()

           return message.author.send("Le message a bien été envoyé.")
           
        }}

}
    module.exports.help = {
        name: "wolfcat"
    }