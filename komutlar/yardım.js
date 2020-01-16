const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("Stat Bot", client.user.avatarURL)
    .setTitle("Stat Bot")
    .setColor("BLUE")
    .setDescription("Sunucu İstatistiklerini Sunan Bir Botdur.")
    .addField("sb!kurulum / st!statskapat", "Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.")
    .addField("st!botbilgi", "Stat Bot Hakkında Bilgi Alırsınız!")
    .setTimestamp()
    .setFooter("© Stat Bots", client.user.avatarURL)
    message.channel.send(Embed)
    };

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardım', 
  description: 'nblm', 
  usage: 'stat' 
};
