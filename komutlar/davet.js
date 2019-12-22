const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setAuthor("ST-AT", "https://images-ext-2.discordapp.net/external/LV8Xh_A9-msM9VaMHsERcGsjATp-hwvNmIWaKasllLw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/527858318786691092/eed7a35b569ee4e449a9fce5f37f5300.png")
    .setColor("BLUE")
    .setTitle("ST-AT BOT")
    .setURL("https://stat31.com")
    .setDescription("Sunucuna İstatistik Paneli Yapmak İçin Davet Edebilirsin")
    .addField("Davet Linki.", "https://goo.gl/qxhqkk")
    .setTimestamp()
    .setFooter("© Mcadventuretime.com", "https://images-ext-2.discordapp.net/external/LV8Xh_A9-msM9VaMHsERcGsjATp-hwvNmIWaKasllLw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/527858318786691092/eed7a35b569ee4e449a9fce5f37f5300.png")
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
  usage: 'stat' 
};
