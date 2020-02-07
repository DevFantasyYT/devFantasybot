const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

	var user = message.mentions.users.first || message.author;
	
	var icon = message.guild.iconURL;

    const exampleEmbed = new discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`Profiel van:` user,)
	.setThumbnail(icon)
	.addField('ID:', user)
    .addField("Account gemaakt op:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Gejoined op:", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
	.setTimestamp()
    .setFooter('Profiel info!');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "whois2"
}