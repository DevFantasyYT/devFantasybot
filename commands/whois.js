const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var user = message.author;

    var embedCreate = new discord.RichEmbed()
    .setColor("RED")
    .setThumbmail(user.avatarURL)
    .setTimestamp()
    .setFooter("Gebruiker informatie!")
    .addField("Naam:", user.username)
    .addField("Status:", user.presence.status)
    .addField("Gejoint op", user.joinedAt)
    .addField("Account gemaakt op:", user.createAt);

 message.channel.send(embedCreate);
}

module.exports.help = {
    name: 'userinfo'
}