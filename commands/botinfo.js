const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setDescription("Discord bot info.")
        .setColor("#9e5811")
        .setThumbnail(botIcon)
        .addField("Bot naam:", bot.user.username)
        .addField("Gemaakt op:", bot.user.createdAt);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}