const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

	var icon = message.mentions.users.first() || message.author.avatarURL;
	
	var user = message.mentions.users.first() || message.author;

    const exampleEmbed = new discord.RichEmbed()
	.setColor('#9e5811')
	.setTitle(`Profiel van: ${message.user.username}`,)
	.setThumbnail(icon)
	.addField('ID:', message.user.id)
	.addField('Gejoint op:',  moment(message.user.joinedAt).format("Do MMM YY"))
	.addField('Account:', moment(message.user.guild.createAt).format("Do MMM YY"))
	.setTimestamp()
    .setFooter('Profiel info!');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "whois"
}