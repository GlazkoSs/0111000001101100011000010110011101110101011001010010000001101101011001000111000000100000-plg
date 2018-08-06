const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {

    if(message.content.startsWith(prefix +'ban')){
        if (message.channel.type === "dm") return;
        let bReason = message.content.split(" ").slice(19);
        if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))  return message.reply("Vous n'avez pas les permissions de faire ceci.").catch(console.error);
        if(message.mentions.users.size === 0) {
          return message.channel.send("Vous devez mentionner un utilisateur !");
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if(!banMember) {
          return message.channel.send("Je ne suis pas sur que cet utilisateur existe...");
        }
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
          return message.reply("Je n'ai pas la permission de faire ceci").catch(console.error);
        }
                 
        banMember.ban().then(member => {
            var embed = new Discord.RichEmbed()
                .setColor("#00ff26")

                .setThumbnail("https://cdn.discordapp.com/attachments/447870042034536484/451412203187470361/ban.gif")
                .addField("L'utilisateur ban :" , member.user.tag)
                .addField("Modérateur ou Administrateur qui a kick : ", `${message.author}`)
                .addField("Raison du ban :" , bReason)
                .addField("Heure du ban : " , message.createdAt)
                .addField("Channel du ban : " , message.channel)
                .setFooter("© Plague, 2018")
                .setTimestamp()
                 message.member.guild.channels.find("name", "logs").sendEmbed(embed)
                message.delete();
        });
    }
        
}

module.exports.help = {
    name: "ban"
}