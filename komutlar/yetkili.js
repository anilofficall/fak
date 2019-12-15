const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("36393F")
    .setAuthor(`${client.user.username} Yetkili Komutları`)
    .addField('**r!küfür-engelle**', '```küfür-engelle <aç> veya <kapat> - Küfür engelleme sistemini, açıp kapatmanızı sağlar.```')
    .addField('**r!reklam-engelle**', '```reklam-engelle <aç> veya <kapat> - Link engelleme sistemini, açıp kapatmanızı sağlar.```')
    .addField('**r!sunucupanel**', '```sunucupanel <kur> veya <kapat> - Sunucu Panel sistemini, açıp kapatmanızı sağlar.```')
    .addField('**r!reklamtaraması**', '```reklamtaraması - Sunucudaki üyelerin oynuyorunda ve isimlerinde reklam arar.```')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ''
};