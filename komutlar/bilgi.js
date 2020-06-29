const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
const Jimp = require("jimp");

exports.run = (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
  const duration = client.uptime;
  const DarkCode = new Discord.RichEmbed()
    .setAuthor("Server Stat", client.user.avatarURL)
    .setTitle("Davet Etmek İçin Tıkla")
    .setURL("https://bit.ly/3g8ZRWE")
    .setDescription(" İstatistik Listeleme İçindir -yardım")
    .setColor("BLACK")
    .setTimestamp()
    .setFooter("Server Stat", client.user.avatarURL)
    .addField(
      "Kullanılan RAM miktarı",
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
    )
    .addField(
      "Shard 1/2",
      `
${client.guilds.size.toLocaleString()}, Sunucu! / ${
        client.users.size
      }, Üye! / Shard ID: **1/2**`
    )
    .addField(
      "Shard 2/2",
      `
${client.guild.size.toLocaleString()}, Sunucu ! / ${
        client.users.size
      }, Üye! / Shard ID: **2/2**`
    );

  message.channel.send(DarkCode);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botbilgi"],
  permLevel: 0
};

exports.help = {
  name: "bot-bilgi",
  description: "taslak",
  usage: "bot-bilgi"
};
