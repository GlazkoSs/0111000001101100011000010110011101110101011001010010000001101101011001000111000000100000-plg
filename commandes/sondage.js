const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {
    
    if (message.content.startsWith(prefix + "sondage")) {
     message.channel.send("🖥 Nouveau sondage !");

     let args = message.content.split(" ").slice(1);
     let thingToEcho = args.join(" ")

    var sondage_embed = new Discord.RichEmbed()

    .setColor("#00ff26")
    .setThumbnail(message.author.avatarURL)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("- " + thingToEcho)
    .setFooter("© Plague, 2018")
    .setTimestamp()
    message.delete()
    message.channel.sendEmbed(sondage_embed)
    .then(function (message) {
        message.react("✅")
        message.react("❌")

    })

}
}
module.exports.help = {
    name: "sondage"
}