const Discord = require("discord.js")
var prefix = "p!";

module.exports.run =  (bot, message, args) => {

    if(message.content.startsWith(prefix + 'ping')) {
        message.channel.send (":ping_pong: Pong ...").then((message) => {
            message.channel.send(`🏓 Pong ! La latence est de ${message.createdTimestamp - Date.now()} ms et la latence de L'API est de ${Math.round(bot.ping)} ms`);
            message.delete()
        });
    }

}
    module.exports.help = {
        name: "ping"
    }