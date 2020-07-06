const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("Server Stat", client.user.avatarURL)
    .setTitle("Server Stat")
    .setColor("ORANGE")
    .setDescription("Sunucu İstatistiklerini Sunan Bir Botdur.")
    .addField("Davet Linkim", `https://bit.ly/2CficlV`,true)
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
  name: 'davet', 
  description: 'nblm', 
  usage: 'davet' 
};
