const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`:fire: Yeterli yetki, bulunmamakta!`);
const embed = new Discord.RichEmbed()
    
    .setColor(client.ayarlar.renk)
    .setDescription(`**Doğru Kullanım:** !sunucupanel kur/kapat`)
  if (!args[0]) return message.channel.send(embed)
  if (args[0] !== 'kur' && args[0] !== 'kapat') return message.channel.send(embed)
  
  if (args[0] == 'kur') {
    const embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`**Hata:** Sunucu istatiği zaten ayarlanmış.`)
  
    
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
    .setDescription(`**Sunucu İstatistiği** başarıyla açıldı.`)
    message.channel.send(em4bed)
  })
  })
        })
  })
  }
  
  if (args[0] == 'kapat') {
    const embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`**Hata:** Sunucu istatiği zaten ayarlanmamış.`)
    if (!db.has(`supanel_${message.guild.id}`)) return message.channel.send(embed)
    let üye = await db.fetch(`üyekanal_${message.guild.id}`)
    let kul = await db.fetch(`kulkanal_${message.guild.id}`)
    let neblm = await db.fetch(`neblmkanal_${message.guild.id}`)
    let neblm31 = await db.fetch(`rekoronlineK_${message.guild.id}`)
    let neblm3123 = await db.fetch(`suKategori_${message.guild.id}`)

    let neblm312 = await db.fetch(`rekoronlineK_${message.guild.id}`)
    let üye2 = message.guild.channels.get(üye)
    let kul2 = message.guild.channels.get(kul)    
    let neblm2 = message.guild.channels.get(neblm)
    let neblm3 = message.guild.channels.get(neblm31)

        let neblm313 = message.guild.channels.get(neblm3123)

    üye2.delete()
    neblm3.delete()
    kul2.delete()
    neblm2.delete()
    neblm313.delete()
    
    db.delete(`üyekanal_${message.guild.id}`)
    db.delete(`kulkanal_${message.guild.id}`)
    db.delete(`rekoronlineK_${message.guild.id}`)
    db.delete(`rekoronlineS_${message.guild.id}`)
    db.delete(`suKategori_${message.guild.id}`)
    db.delete(`supanel_${message.guild.id}`)

          const em4bed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`**Sunucu İstatistiği** başarıyla kapatıldı.`)
    message.channel.send(em4bed)
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sunucupanel',
  description: '',
  usage: ''
};