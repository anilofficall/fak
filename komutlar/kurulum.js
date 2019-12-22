const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
  if (args[0] == 'kur') {
    const embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(client.emojis.get("647733808447225866") + `| **Hata:** Sunucu istatiği zaten ayarlanmış.`)
  
    
    if (db.has(`supanel_${message.guild.id}`)) return message.channel.send(embed)
    
    let kategori = await message.guild.createChannel("Sunucu İstatistik", "category", [{
      id: message.guild.id,
      deny: ["CONNECT"]
    }])
    message.guild.createChannel(`Toplam Kullanıcı » ${message.guild.memberCount}`, "voice").then(üye => {
    message.guild.createChannel(`Rekor Online » ${message.guild.members.filter(m => m.presence.status !== "offline").size}`, 'voice').then(kul => {
    message.guild.createChannel(`Aktif Üye » ${message.guild.members.filter(m => m.presence.status !== "offline").size}`, 'voice').then(aktif => {
    message.guild.createChannel(`Bot Sayısı » ${message.guild.members.filter(m => m.user.bot).size}`, 'voice').then(neblm => {

    üye.overwritePermissions(message.guild.id, {
    'CONNECT': false
    })
      
    aktif.overwritePermissions(message.guild.id,{
    'CONNECT': false
    })
      
    kul.overwritePermissions(message.guild.id,{
    'CONNECT': false
    })
    neblm.overwritePermissions(message.guild.id,{
    'CONNECT': false
    })

      üye.setParent(kategori.id)  
    kul.setParent(kategori.id)  
    neblm.setParent(kategori.id)
          aktif.setParent(kategori.id)

    db.set(`mg_${message.guild.id}`, message.guild.id)
    db.set(`üyekanal_${message.guild.id}`, üye.id)
    db.set(`rekoronlineK_${message.guild.id}`, aktif.id)
    db.set(`rekoronlineS_${message.guild.id}`, message.guild.members.filter(m => m.presence.status !== "offline").size)
    db.set(`kulkanal_${message.guild.id}`, kul.id)
    db.set(`neblmkanal_${message.guild.id}`, neblm.id)
    db.set(`supanel_${message.guild.id}`, "aktif")  
    db.set(`suKategori_${message.guild.id}`, kategori.id)

      const em4bed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(client.emojis.get("647733787769307136") + `| **Sunucu İstatistiği** başarıyla açıldı.`)
    message.channel.send(em4bed)
  })
  })
        })
  })
  }
  
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'kurulum', 
  description: 'nblm', 
  usage: 'stat' 
};
