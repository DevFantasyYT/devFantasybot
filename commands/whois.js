const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var user = message.author;

    var createEmbed = new Discord.RichEmbed()
    .addField("Testje", user);

    message.channel.send(createEmbed)

}

module.exports.help = {
    name: 'userinfo'
}