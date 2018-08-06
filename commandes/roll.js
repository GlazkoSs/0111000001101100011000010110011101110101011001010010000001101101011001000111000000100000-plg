const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {

    if(message.content.startsWith("roll")){
        
        var rollchiffre = Math.floor(Math.random() * 100);
        var rembed = new Discord.RichEmbed()

        .setColor("#00ff26")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Tu as roll " + rollchiffre)
        .setFooter("© Plague, 2018")
        .setTimestamp()
        message.channel.send(rembed)
    }

}

    module.exports.help = {
        name: "roll"
    }