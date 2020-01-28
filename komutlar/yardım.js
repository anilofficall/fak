const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("DarkCodeS-Panel", client.user.avatarURL)
    .setTitle("DarkCodeS-Panel")
    .setColor("BLUE")
    .setDescription("Sunucu İstatistiklerini Sunan Bir Botdur.")
    .addField("dcp!kurulum / dcp!statskapat", "Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.")
    .addField("dcp!botbilgi", "DarkCodeS-Panel Hakkında Bilgi Alırsınız!")
    .setTimestamp()
    .setFooter("© DarkCodeS-Panel", client.user.avatarURL)
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
