const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Eğlence Komutları', 'r!eğlence')
.setFooter('© 2018 Raidet ΛЯGФ ~  ☪ ', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
