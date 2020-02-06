const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{
    
    var memberIcon = message.author.avatarURL

    var testjes = message.guild.status

    var botEmbed = new discord.RichEmbed()

        .setDescription(`Uw profiel.`)
        .setColor("#d11717")
        .setThumbnail(memberIcon)
        .addField("Naam:", message.author.username)
        .addField("ID:", message.author.id)
        .addField("Server gejoind:", message.guild.joinedAt)
        .addField("Test field", testjes)

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "whois"
}