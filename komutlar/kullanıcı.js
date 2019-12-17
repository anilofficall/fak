const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Asistan`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:cedenme:601271998026350592> Kullanıcı - Komutları 1 <a:cedenme:601271998026350592>`, `<a:krmzbit:601273859131572267> | **!!afk**: Afk olarak bildirim gider.\n<a:krmzbit:601273859131572267> | **!!bilgi**: Bot hakkında gerekli bilgileri alırsınız.\n<a:krmzbit:601273859131572267> | **!!davet**: Botun destek sunucusunun ve botun davet linkini atar.\n<a:krmzbit:601273859131572267> | **!!hıztesti**: Botun hızını ölçer.\n<a:krmzbit:601273859131572267> | **!!sunucubilgi**: Sunucu hakkında bilgi verir.`)
      .addField(`<a:cedenme:601271998026350592> Kullanıcı - Komutları 2 <a:cedenme:601271998026350592>`, `<a:krmzbit:601273859131572267> | **!!sunucuresmi**: Sunucu resmini paylaşır.\n<a:krmzbit:601273859131572267> | **!!ping**: Botun pingini gösterir.\n<a:krmzbit:601273859131572267> | **!!mesajdöndür**: Mesajınızı ters çevirir.\n<a:krmzbit:601273859131572267> | **!!emojiyazı**: Yazdıklarınızı emoji ile yazar.\n <a:krmzbit:601273859131572267> | **!!havadurumu**(şehir): Günlük hava tahminini paylaşır.`)
      .addField(`<a:cedenme:601271998026350592> Kullanıcı - Komutları 3 <a:cedenme:601271998026350592>`, `<a:krmzbit:601273859131572267> | **!!İstatistik**: Botun istatistiklerini atar.\n<a:krmzbit:601273859131572267> | **!!desteksunucu**: Destek sunucumuza gelerek yardım talep edebilirsiniz.\n<a:krmzbit:601273859131572267> | **!!kanalbilgi**: Yazdığınız kanal hakkında bilgi verir.\n<a:krmzbit:601273859131572267> | **!!kullanıcıbilgim**: Kullanıcı bilginiz hakkında bilgi verir.\n<a:krmzbit:601273859131572267> | **!!avatar**: Profil fotoğrafını sohbete atar.`)
      .addField(`<a:cedenme:601271998026350592> Kullanıcı - Komutları 4 <a:cedenme:601271998026350592>`, `<a:krmzbit:601273859131572267> | **!!steamfiyat (oyun ismi)**: Steamdeki uygulamaların fiyatını söyler.\n <a:krmzbit:601273859131572267> | **!!saat**: Türkiye'nin saatini gösterir.`)
      .addField(`<a:fast_parrot:599310200163401748> » Linkler`, `[Bot Davet Linki](https://discordapp.com/) **|** [Destek Sunucusu](https://discord.gg) **|** [Bota Oy Ver (Vote)](https://discordbots.org/) **|** [Web Sitesi](https://asistanbott.glitch.me/)`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  
  };
  
  exports.help = {
    name: 'kullanıcı',
    description: 'yardım',
    usage: 'kullanıcı'
  };