const express = require('express')
const app =express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`[PING] Açık tutuyorum...`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000); 

const pingDiscord = require('discord.js');
const client = new pingDiscord.Client();
const chalk = require('chalk');
const fs = require('fs');
const db = require("quick.db")
const moment = require('moment');
require('./util/eventLoader')(client);


client.ayarlar = {
"durum":"dnd",//online , idle , dnd 
"oynuyor":"st!yardım | ST-AT",
"prefix":"r!",
"renk": "36393F",
"token":"NjUyODkyODc4OTM4NDM5Njkx.XfEbnA.4BrKzHSvKti1Uits2Vy5qt2Kmdo"
}


client.on("ready", async () => {  
  client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
   require("./index.js")(client); 
   console.log("Konrol paneli aktif edildi!")
  console.log("Shard aktif ediliyor!")
})


const kurulum = message => {
  console.log(`${message} yüklendi.`);
};

client.commands = new pingDiscord.Collection();
client.aliases = new pingDiscord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  kurulum(`${files.length} komut kurulacak.`);

   files.forEach(f => {
    let pingKodları = require(`./komutlar/${f}`);
  
    kurulum(`Kurulan komut ~ ${pingKodları.help.name}.`);
    client.commands.set(pingKodları.help.name, pingKodları); 

    client.commands.set(pingKodları.help.name, pingKodları);
    pingKodları.conf.aliases.forEach(alias => {
    client.aliases.set(alias, pingKodları.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let pingDosya = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, pingDosya);
      pingDosya.conf.aliases.forEach(alias => {
        client.aliases.set(alias, pingDosya.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_CHANNELS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on('ready', () => {
    setInterval(() => {
      
      client.guilds.forEach(guild => {
 
    
      const totalm = db.fetch(`üyekanal_${guild.id}`);
const memberss = db.fetch(`kulkanal_${guild.id}`);
const botscont = db.fetch(`neblmkanal_${guild.id}`);
// GEREKLİ YERLER
const serverStats = {
  guildID: guild.id,
  totalUsersID: totalm,
  memberCountID: memberss,
  botCountID: botscont
};
      
       
  const voiceChannels = guild.channels.filter(c => c.type === 'voice');
    let count = 0;
  
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      
      
  if (db.fetch(`supanel_${guild.id}`) == "aktif") {
if (guild.id !== serverStats.guildID) return;
if (!guild.channels.get(totalm)) return console.log("Hata kanal ismi değişmiyor amk")
let aktif = guild.members.filter(m => m.presence.status !== "offline").size
let rekoronline = db.fetch(`rekoronlineS_${guild.id}`);
client.channels.get(serverStats.totalUsersID).setName(`Toplam Üye • ${guild.memberCount} `);
client.channels.get(db.fetch(`rekoronlineK_${guild.id}`)).setName(`Rekor Online • ${db.fetch(`rekoronlineS_${guild.id}`)}`);
client.channels.get(serverStats.memberCountID).setName(`Çevrimiçi Üye • ${guild.members.filter(m => m.presence.status !== "offline").size}`);
client.channels.get(serverStats.botCountID).setName(`Botlar • ${guild.members.filter(m => m.user.bot).size}`);
client.channels.get(db.fetch(`sesliK_${guild.id}`)).setName(`Sesli • ${count}`);

    if(aktif > rekoronline) {
    db.set(`rekoronlineS_${guild.id}`, aktif)
   client.channels.get(serverStats.onlineUsers).setName(`Rekor Online  ${guild.members.filter(m => m.presence.status !== "offline").size}`)
  }
  } else {
    return;
  }

    
})

  
      }, 1000)
});


client.login("NjUyODkyODc4OTM4NDM5Njkx.XfEbnA.4BrKzHSvKti1Uits2Vy5qt2Kmdo"); 