const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commandes = new Discord.Collection();


      fs.readdir("./commandes/", (err, files) => {

        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.lenght <= 0){
            console.log("Je ne trouve pas les commandes !");
            return;
        }

        jsfile.forEach((f, i) => {
            let props = require(`./commandes/${f}`);
            console.log(`${f} charger !`)
            bot.commandes.set(props.help.name, props);
        });
        });

        var prefix = "p!";
        var token = "NDc1MjkzMzExNTAyOTA5NDY0.DkoD1w.Or117kmvszmKqbpKuzj5MK9A6qc";


bot.on("ready", async () => {
    console.log("____________________________________________________________________________________");
    console.log("                                                                                    ")
    console.log("ePlagueros  laguer             Pla           ueros      eroseP  guero  ePlaguerose");                                                                                                                                           
    console.log(" ePlagueros Plague            sePla         aguerosePl  uerose  aguer  sePlaguerose");
    console.log(" sePl    ros  lag             osePl        Plag  rose    uer     agu   oseP    eros");
    console.log(" osePlaguero  Pl             eroseP       sePl    ros     ue     lag    ose");       
    console.log(" rosePlague   eP             uer seP      ose             gu     Pla    rosePl");     
    console.log(" erosePlag    se            agueroseP     ros             ag     ePl    erosePl");    
    console.log(" uer          ose           laguerose     ero   laguer    lag    seP    ueroseP");
    console.log(" gue         eros    gu    ePla   rose     er    lague    Pla    ose    gue"); 
    console.log(" agu          ero    ag    seP     ros     uer   Plag     ePlaguero     ague");
    console.log("Plague      aguerosePla  eroseP   uerose    uerosePl       ePlague     Plaguer");  
    console.log("ePlagu      laguerosePl  uerose   gueros     uerosePl        Plag      ePlagueroseP");                                                                                                                                       
                                                                                                                                                                                                                             
    bot.user.setActivity(" Plague | " + bot.guilds.size + " guilds | " + bot.users.size + " users", "https://www.twitch.tv/plague")

    bot.on('message', message => {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let cmd = messageArray[0];

        let commandesfile = bot.commandes.get(cmd.slice(prefix.length));
        if(commandesfile) commandesfile.run(bot, message, args);

        if (message.content.startsWith(`<@${bot.user.id}>`)) { 
            message.channel.send("Salut, mon prefix c'est " + `**${prefix}**` + ", fait p!aide pour voirs mes commandes.");
         }
})
});

bot.login(token)