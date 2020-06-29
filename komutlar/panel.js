const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("Server Stat", client.user.avatarURL)
    .setTitle("Server Stat")
    .setColor("ORANGE")
    .setDescription("Sunucu İstatistiklerini Sunan Bir Botdur.")
    .addField("Panelimiz : https://server-statbot.glitch.me/")
    .setTimestamp()
    .setFooter("© Server Stat", client.user.avatarURL)
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
  usage: 'panel' 
};
