const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {

    if(message.content.startsWith(prefix + "serverlist")){
        
        var server_embed = new Discord.RichEmbed()
        
        .setColor("#00ff26")
        .setThumbnail(bot.user.avatarURL)
        .setTitle("**Plague | Liste des serveurs**")
        .setDescription(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
        .setFooter("© Plague, 2018")
        .setTimestamp()
        message.delete()
        message.channel.send(server_embed)

    }
}

module.exports.help = {
    name: "serverlist"
}