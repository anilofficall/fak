const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
    message.delete();
    if (!args[0]) return message.channel.send(' ``` \n » Kullanım: !kısalt <URL> <isim> \n » Örnek: !kısalt http://mythiabot.com/baymythia \n ``` ')

    if(!args[1]) {
 
          

         
     
    } else {
    

       
   
    }

};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'kısalt',
 description: 'İstediğiniz URLni Kısaltır. ',
 usage: 'kısalt'
};
