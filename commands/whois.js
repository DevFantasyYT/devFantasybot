const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

	var icon = message.mentions.users.first.avatarURL() || message.author.avatarURL;
	
	var user = message.mentions.users.first() || message.author;

    const exampleEmbed = new discord.RichEmbed()
	.setColor('#9e5811')
	.setTitle(`Profiel van: ${user.username}`,)
	.setThumbnail(icon)
	.addField('ID:', user.id)
	.addField('Gejoint op:',  moment(user.guild.joinedAt).format("Do MMM YY"))
	.addField('Account:', moment(user.guild.createAt).format("Do MMM YY"))
	.setTimestamp()
    .setFooter('Profiel info!');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "whois"
}