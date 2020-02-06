const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

    var icon = message.guild.iconURL;

        var serverEmbed = new discord.RichEmbed()
            .setDescription("Server info")
            .setColor("#d11717")
            .setThumbnail(icon)
            .addField("Je bent gejoint op:", message.guild.joinedAt)
            .addField("Totaal members:", message.guild.memberCount);

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}