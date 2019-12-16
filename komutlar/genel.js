const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
    .addField('**r!havadurumu**', '```Hava Durumunu Gösterir.```')//ne kadar eğlence komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('**r!avatar**', '```Profil Resminizi Atar..```')
    .addField('**r!kaçcm**', '```Malatafının Kaç Cm olduğunu Söyler.```')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=652511470579613716${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: '',
  usage: ''
};