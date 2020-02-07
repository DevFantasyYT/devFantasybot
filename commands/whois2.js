const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

    var icon = message.guild.iconURL;

    const exampleEmbed = new discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`Profiel van: ${message.author.username}`,)
	.setThumbnail(icon)
	.addField('ID:', user.id)
	.addField('Inline field title', 'Some value here')
	.addField('Inline field title', 'Some value here')
	.addField('Inline field title', 'Some value here')
	.setTimestamp()
    .setFooter('Profiel info!');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "whois2"
}