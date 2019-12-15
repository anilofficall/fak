const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('36393F')
.setAuthor(client.user.username, client.user.avatarURL)
.setTimestamp()
.setDescription(`[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${client.user.id}/vote)`)
.addField('» Eğlence Komutları', 'r!eğlence', true)
.addField('» Moderatör Komutları', 'r!yetkili', true)
.addField('» Genel Komutlar', 'r!genel', true)
.setFooter('© 2019 Raidet ΛЯGФ ~  ☪ ', client.user.avatarURL)
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
