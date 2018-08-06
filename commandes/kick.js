const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {
        
    if(message.content.startsWith(prefix +'kick')){
        if (message.channel.type === "dm") return;
        let kReason = message.content.split(" ").slice(19);
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))  return message.reply("<:logohikariuspng:450625849662767104> | Vous n'avez pas les permissions de faire ceci.").catch(console.error);
        if(message.mentions.users.size === 0) {
         return message.channel.send("Vous devez mentionner un utilisateur !");
         message.delete()
    }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
        return message.channel.send("Je ne suis pas sur que cet utilisateur existe...");
        message.delete()
    }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply("Je n'ai pas la permission de faire ceci").catch(console.error);
        message.delete()
    }
                     
        kickMember.kick().then(member => {
                var embed = new Discord.RichEmbed()
                .setColor("#00ff26")
                .setThumbnail("https://cdn.discordapp.com/attachments/447870042034536484/451412203187470361/ban.gif")
                .addField("L'utilisateur kick ", member.user.tag)
                .addField("Modérateurs ou Administrateur qui a kick : ", `${message.author}`)
                .addField("Raison du kick :" , kReason)
                .addField("Heure du kick : ", message.createdAt)
                .addField("Channel du kick : ", message.channel)
                .setFooter("© Plague, 2018")
                .setTimestamp()
                 message.member.guild.channels.find("name", "logs").send(embed)
                message.delete();

        });
    }
}

module.exports.help = {
    name: "kick"
}