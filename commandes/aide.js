const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {

    if(message.content.startsWith(prefix + "aide")){
        var aide_embed = new Discord.RichEmbed()
        
        .setColor("#00ff26")
        .setThumbnail(message.author.avatarURL)
        .addField("**Plague | Menu d'aide**","_ _")
        .addField("**🛠 Administration**", "*setConfig, ban, kick, clear, mute, demute*")
        .setFooter("© Plague, 2018")
        .setTimestamp()
        message.author.send(aide_embed)

        return message.channel.send("Mon menu d'aide ta été envoyer en privé. :mailbox_with_mail:")
    }

}

    module.exports.help = {
        name: "aide"
    }