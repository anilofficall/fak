const Discord = require('discord.js');
const fs = require('fs');
const veri = require("quick.db")


exports.run = (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`:fire: Yeterli yetki, bulunmamakta!`);

    const secenekler = args.slice(0).join(' ');

    var errembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Yanlış kullanım tespit edildi!`)
    if(secenekler.length < 1) return message.channel.send(errembed);
    if(secenekler.length < 1) return message.reply("Aktif hale getirmek için r!reklam-engelle aç & r!reklam-engelle kapat").then(m => m.delete(10000));

   if (secenekler === "aç") {
        if (veri.has(`reklamKuvars_${message.guild.id}`)) return message.channel.send("Zaten bu özellik açık!")
        message.channel.send(`Reklam filtresi, aktif hale getirildi!`).then(m => m.delete(5000));
        veri.set(`reklamKuvars_${message.guild.id}`, "acik")
    };

    if (secenekler === "kapat") {
        if (!veri.has(`reklamKuvars_${message.guild.id}`)) return message.channel.send("Zaten bu özellik kapalı!")
        message.channel.send(`Reklam filtresi, deaktif hale getirildi!`).then(m => m.delete(5000));
        veri.delete(`reklamKuvars_${message.guild.id}`)
    };
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam-engel'],
  permLevel: 0
};
      
exports.help = {
  name: 'reklam-engelle',
  description: 'reklam engelleme sistemini, açıp kapatmanızı sağlar.',
  usage: 'reklam-engelle <aç> veya <kapat>'
};
   