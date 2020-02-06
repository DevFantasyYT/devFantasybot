const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Sorry u kan dit niet doen!");
    
    var idee = arguments.join(' ');

    if (!idee) return message.channel.send("**Geef een mededeling mee!**");

    var meldingEmbed = new discord.RichEmbed()
        .setTitle("**Nieuw mededeling!**")
        .setColor("#a6732b")
        .addField("Melding:", idee)
        .addField('Ingezonden door:', message.author);

    var meldingChannel = message.guild.channels.find("name", "✉〉mededelingen");
    if (!meldingChannel) return message.channel.send("Kanaal niet gevonden!");

    meldingChannel.send(meldingEmbed)

}

module.exports.help = {
    name: "mededeling"
}