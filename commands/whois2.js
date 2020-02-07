const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

    var icon = message.guild.iconURL;

    const exampleEmbed = new discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`Profiel van: ${message.author.username}`,)
	.setThumbnail(icon)
	.addField('ID:', message.member.id)
	.addField('Gejoint op:',  moment(message.guild.members.get.joinedAt).format("Do MMM YY"))
	.addField('Account:', moment(message.guild.members.get.createAt).format("Do MMM YY"))
	.setTimestamp()
    .setFooter('Profiel info!');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "whois2"
}