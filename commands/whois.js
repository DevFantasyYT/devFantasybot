const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

    var icon = message.author.avatarURL;

    const exampleEmbed = new discord.RichEmbed()
	.setColor('#9e5811')
	.setTitle(`Profiel van: ${message.author.username}`,)
	.setThumbnail(icon)
	.addField('ID:', message.member.id)
	.addField('Gejoint op:',  moment(message.author.joinedAt).format("Do MMM YY"))
	.addField('Account:', moment(message.author.createAt).format("Do MMM YY"))
	.setTimestamp()
    .setFooter('Profiel info!');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "whois"
}