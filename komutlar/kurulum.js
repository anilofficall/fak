const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

    if (db.has(`supanel_${message.guild.id}`)) return message.channel.send("Stats Sistemi Zaten Açık.")
 
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
  
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  
    let kategori = await message.guild.createChannel("Sunucu İstatistik", "category", [{
      id: message.guild.id,
      deny: ["CONNECT"]
    }])
    message.guild.createChannel(`Toplam Üye • ${message.guild.memberCount}`, "voice").then(üye => {
    message.guild.createChannel(`Çevrimiçi Üye • ${message.guild.members.filter(m => m.presence.status !== "offline").size}`, 'voice').then(aktif => {
    message.guild.createChannel(`Botlar • ${message.guild.members.filter(m => m.user.bot).size}`, 'voice').then(neblm => {
    message.guild.createChannel(`Rekor Online • ${message.guild.members.filter(m => m.presence.status !== "offline").size}`, 'voice').then(kul => {
    message.guild.createChannel(`Sesli • (${count})`, 'voice').then(kul22 => {

    üye.overwritePermissions(message.guild.id, {
    'CONNECT': false
    })
      
    aktif.overwritePermissions(message.guild.id,{
    'CONNECT': false
    })
      
    kul.overwritePermissions(message.guild.id,{
    'CONNECT': false
    })
      
      kul22.overwritePermissions(message.guild.id,{
    'CONNECT': false
    })
      
      
    neblm.overwritePermissions(message.guild.id,{
    'CONNECT': false
    })

      üye.setParent(kategori.id)  
    kul.setParent(kategori.id)  
    neblm.setParent(kategori.id)
         kul.setParent(kategori.id)
 
          aktif.setParent(kategori.id)

    db.set(`mg_${message.guild.id}`, message.guild.id)
    db.set(`sesliK_${message.guild.id}`, kul22.id)
    db.set(`üyekanal_${message.guild.id}`, üye.id)
    db.set(`rekoronlineK_${message.guild.id}`, aktif.id)
    db.set(`rekoronlineS_${message.guild.id}`, message.guild.members.filter(m => m.presence.status !== "offline").size)
    db.set(`kulkanal_${message.guild.id}`, kul.id)
    db.set(`neblmkanal_${message.guild.id}`, neblm.id)
    db.set(`supanel_${message.guild.id}`, "aktif")  
    db.set(`suKategori_${message.guild.id}`, kategori.id)

    message.channel.send("Stats Sistemi Kuruldu.")
  })
  })
      })
        })
  })
  
  
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 3
};

exports.help = {
  name: 'kurulum', 
  description: 'nblm', 
  usage: 'stat' 
};