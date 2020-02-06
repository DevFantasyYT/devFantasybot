const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Sorry u kan dit niet doen!");
    
    var idee = arguments.join(' ');

    var author = message.author;s

    if (!idee) return message.channel.send("**Geef een mededeling mee!**");

    var ideeEmbed = new discord.RichEmbed()
        .setTitle("**Nieuw mededeling!**")
        .setColor("#35fc03")
        .addField("Melding:", idee)
        .addFooter(`Ingezonden door ${author}`);

    var mmeldingChannel = message.guild.channels.find("name", "✉〉mededelingen");
    if (!meldingChannel) return message.channel.send("Kanaal niet gevonden!");

    meldingChannel.send(meldingEmbed)

}

module.exports.help = {
    name: "melding"
}