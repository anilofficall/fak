const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setAuthor("Server Stat", client.user.avatarURL)
    .setTitle("Server Stat")
    .setColor("ORANGE")
    .setDescription("Sunucu İstatistiklerini Sunan Bir Botdur.")
    .addField(
      "-kurulum / -statskapat",
      "Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir."
    )
    .addField("-panel", "Odaları Panelsen Yönete Bilirsiniz!")
    .addField("-davet", "Davet Linkimi Alabilirsin")
    .setTimestamp()
    .setFooter("© Server Stat", client.user.avatarURL);
  message.channel.send(Embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "nblm",
  usage: "yardım"
};
