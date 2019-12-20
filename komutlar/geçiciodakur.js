const Discord = require('discord.js'),
request = require("request");
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.`);
  message.guild.createChannel("Geçici Sohbet", "category").then(kategori => {
    message.guild.createChannel("Sohbet Oluştur", "voice").then(ses => {
    ses.setParent(kategori.id)
    db.set(`geciciKategori_${message.guild.id}`, kategori.id)
    db.set(`geciciKanal_${message.guild.id}`, ses.id)
  })
  })
  request({
    url: `https://discordapp.com/api/v7/channels/${db.fetch(`geciciKanal_${message.guild.id}`)}`,
    method: "PATCH",
    json: {
        user_limit: "3"
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
  message.channel.send("Başarıyla geçici oda sistemi aktif edildi! " + client.emojis.get("647746144155467786"))
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["geçiciodakurulum"],
	permLevel: 0,
	kategori: 'yetkili'
}

exports.help = {
	name: 'geçici-oda-kurulum',
	description: '',
	usage: ''
}