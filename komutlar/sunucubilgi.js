const Discord = require('discord.js');
const moment = require('moment')

exports.run = (client, message) => {
  let aylar = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
  
  let günler = {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
    }
      var ban = message.guild.fetchBans();
 let guild = message.guild;



   const embed = new Discord.RichEmbed()
   .setColor(client.ayarlar.renk)
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setThumbnail(message.guild.iconURL)
   .addField('İsim kısaltması:', message.guild.nameAcronym, true)
   .addField('Sunucu ID:', message.guild.id, true)  
   .addField('Ana kanal:', message.guild.defaultChannel,true)
   .addField('AFK kanalı:', message.guild.afkChannel, true)
   .addField('AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`,true)
   .addField('Güvenlik Seviyesi:', message.guild.verificationLevel, true)
   .addField('Kanal Sayısı: ['+message.guild.channels.size+']', `:sound: ${message.guild.channels.filter(chan => chan.type === 'voice').size} :speech_balloon: ${message.guild.channels.filter(chan => chan.type === 'text').size}`, true)
   .addField('Üye Bilgisi : ['+message.guild.memberCount+']', `Offline: ${message.guild.members.filter(o => o.presence.status === 'offline').size} Boşta: ${message.guild.members.filter(o => o.presence.status === 'idle').size} Aktif:${message.guild.members.filter(o => o.presence.status === 'online').size} Rahatsız Etmeyin: ${message.guild.members.filter(o => o.presence.status === 'dnd').size}`,true)
   .addField('Sunucu Bölgesi:', message.guild.region, true) 
   .addField('Rol sayısı',message.guild.roles.size,true)
   .addField('Sahibi:', message.guild.owner, true)
   .addField('Oluşturma tarihi:', message.guild.createdAt.toDateString().replace("Nov", "Kasım").replace("Jan", "Ocak").replace("Feb", "Şubat").replace("Mar", "Mart").replace("Aug", "Ağustos").replace("Sep", "Eylül").replace("Oct", "Ekim").replace("Fri", "Cuma").replace("Mon", "Pazartesi").replace("Sun", "Pazar").replace("Sat", "Cumartesi").replace("Tue", "Salı").replace("Wed", "Çarşamba").replace("Thu", "Perşembe"), true)
  .setTimestamp()

 
   const roller = new Discord.RichEmbed()
   .setColor(client.ayarlar.renk)
   .setDescription(`Tüm Roller: `+message.guild.roles.filter(r => r.name).map(r => r).join(', '))
   
   const emojiler = new Discord.RichEmbed()
   .setColor(client.ayarlar.renk)
   .setDescription(`Tüm Emojiler:`+ message.guild.emojis.map(e=>e.toString()).join(" "))
   message.channel.send({embed});
   message.channel.send(roller);
   message.channel.send(emojiler)
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ["istatistik"],
   permLevel: 0
 };

 exports.help = {
   name: 'sunucubilgi',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'bilgi'
 };