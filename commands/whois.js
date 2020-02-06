const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{
    
    var memberIcon = message.author.avatarURL

    var testjes = member.guild.roles.find("all")

    var botEmbed = new discord.RichEmbed()

        .setDescription(`Uw profiel.`)
        .setColor("#d11717")
        .setThumbnail(memberIcon)
        .addField("Naam:", message.author.username)
        .addField("ID:", message.author.id)
        .addField("Server gejoind:", message.guild.joinedAt)
        .addField("Roles", testjes)

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "whois"
}