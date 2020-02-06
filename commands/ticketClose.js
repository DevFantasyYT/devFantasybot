const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

    const catogoryId = "670940267066687508";

    if(message.channel.parentID == catogoryId){

        message.channel.delete()

    }
    var embedCreate = new discord.RichEmbed()
    .setTitle("Hoi, " + message.channel.name)
    .setColor("#10c71f")
    .setDescription("Uw ticket is gemarkeerd als **compleet**, Wilt u een nieuwe ticket maken doe dan !ticket")
    .setFooter("Uw ticket is afgesloten.");

    message.author.send(embedCreate)

}

module.exports.help = {
    name: "close"
}