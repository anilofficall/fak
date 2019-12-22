const Discord = require('discord.js');

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  const duration = client.uptime
const embed = new Discord.RichEmbed()
.setAuthor("MC-EŞŞEK", client.user.avatarURL)
.setTitle("MC-EŞŞEK BOT")
.setURL("https://goo.gl/vJvz9g")
.setDescription("www.Mcadventuretime.com Tarafından Hazırlanmış Botdur İstatistik Listeleme İçindir st!yardım")
.setColor("BLUE")
.setTimestamp()
.setFooter("© Mcadventuretime.com", client.user.avatarURL)
.addField("Kullanılan RAM", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
.addField("Bilgi", `
${client.guilds.size.toLocaleString()}, Sunucu!. / ${client.users.size}, Üye! / Shard ID: **Yok!**
`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['botbilgi'], 
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};
