const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var user = message.mentions.users.first() || message.author;

    var embedCreate = new discord.RichEmbed()
    .setAuthor(user.tag, user.avatarURL)
    .setColor("RED")
    .setThumbmail(user.avatarURL)
    .setTimestamp()
    .setFooter("Gebruiker informatie!")
    .addField("Naam:", user.username)
    .addField("Status:", user.presence.status)
    .addField("Gejoint op", moment(message.guild.members.get(user.id).joinedAt).format("MMM Do YY"))
    .addField("Account gemaakt op:", moment(message.guild.members.get(user.id).createAt).format("MMM Do YY"));

    message.channel.send(embedCreate);
}

module.exports.help = {
    name: 'userinfo'
}