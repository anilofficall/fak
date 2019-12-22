const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if (!db.has(`supanel_${message.guild.id}`)) return message.channel.send("Stats Sistemi Zaten Kapalı Dostum \:)")
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
    .setDescription(client.emojis.get("647733787769307136") + `| **Sunucu İstatistiği** başarıyla kapatıldı.`)
    message.channel.send(em4bed)
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 3
};

exports.help = {
  name: 'statskapat', 
  description: 'nblm', 
  usage: 'stat' 
};
