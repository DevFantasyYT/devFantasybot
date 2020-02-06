const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

    // !rps steen papier schaar.

    if(!arguments[0]) return message.channel.send("**Gebruik, !rps <steen papier of schaar>**");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(arguments[0] == "steen"){

        if(result = "papier"){

            message.channel.send(`Ik heb ${result} :notepad_spiral:, ik win!`);

         }
         else if(result == "schaar"){
             message.channel.send(`Ik heb ${result} :scissors:,  jij wint!`);
         }
         else if(result == "steen"){
            message.channel.send(`Ik heb ${result} :moyal:,  gelijkspel!`);
         }

    }
    else if(arguments[0] == "papier"){

        if(result = "schaar"){

            message.channel.send(`Ik heb ${result} :scissors:, ik win!`);
            
         }
         if(result == "steen"){
             message.channel.send(`Ik heb ${result} :moyai:,  jij wint!`);
         }
         if(result == "papier"){
            message.channel.send(`Ik heb ${result} :notepad_spiral:,  gelijkspel!`);
         }

    }
    else if(arguments[0] == "schaar"){

        if(result = "steen"){

            message.channel.send(`Ik heb ${result} :moyai:, ik win!`);
            
         }else if(result == "schaar"){
             message.channel.send(`Ik heb ${result} :notepad_spiral:,  gelijkspel`);
         }else if(result == "papier"){
            message.channel.send(`Ik heb ${result} :notepad_spiral:,  jij wint!`);
         }

    }

}

module.exports.help = {
    name: "rps"
}