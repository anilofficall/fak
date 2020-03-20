const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("Protect Of Server", client.user.avatarURL)
    .setTitle("Protect Of Server")
    .setColor("ORANGE")
    .setDescription("Sunucu İstatistiklerini Sunan Bir Botdur.")
    .addField("-kurulum / -statskapat", "Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.")
    .setTimestamp()
    .setFooter("© Protect Of Server", client.user.avatarURL)
    message.channel.send(Embed)
    };

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'panel', 
  description: 'nblm', 
  usage: 'stat' 
};
