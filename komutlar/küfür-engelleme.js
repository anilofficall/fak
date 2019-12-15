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
  if(secenekler.length < 1) return message.reply("Aktif hale getirmek için v!küfür-engelle aç & v!küfür-engelle kapat").then(m => m.delete(10000));

    message.delete();

            if (secenekler === "aç") {
        message.channel.send(`Küfür filtresi, aktif hale getirildi!`).then(m => m.delete(5000));
        veri.set(`kufurKuvars_${message.guild.id}`, "acik")
    };

    if (secenekler === "kapat") {
        if (!veri.has(`kufurKuvars_${message.guild.id}`))
        message.channel.send(`Küfür filtresi, deaktif hale getirildi!`).then(m => m.delete(5000));
        veri.delete(`kufurKuvars_${message.guild.id}`)
    };
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür-engel'],
  permLevel: 0
};
      
exports.help = {
  name: 'küfür-engelle',
  description: 'Küfür engelleme sistemini, açıp kapatmanızı sağlar.',
  usage: 'küfür-engelle <aç> veya <kapat>'
};
   