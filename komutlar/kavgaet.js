const Discord = require('discord.js'); 

exports.run = (client, message, args, params) => {
	if (!message.guild) {
		const ozelmesajuyari = new Discord.RichEmbed()
		.setColor(`Random`)
		.setAuthor(message.author.username, message.author.avatarURL)
		.addField('**Eğlence Komutlarını Özel Mesajlarda Kullanamazsın.!**')
	return message.author.sendEmbed(ozelmesajuyari); }
	if( message.channel.type !== 'dm')  return message.reply('**Eğlence Komutlarını Özel Mesajlarda Kullanamazsın.!**')
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kavga Etmek İstediğin Kişiyi Yazmalısın.***');
	const embed = new Discord.RichEmbed()
	.setAuthor ('Of Ne Kavga Be')
 	.setColor (`Random`)
	.setDescription(`** ${mesaj} ` + message.author.username + ' Seni Dövenin Öcünü Alacak mısın?  **')
	
	.setImage(`https://giphy.com/gifs/battle-beasts-X154Md8zzrlKg`) 
return message.channel.sendEmbed(embed);
};

exports.conf = {
	enabled: true,
	guildOnly : false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'kavgaet',
	description: 'İstediğiniz Kişiyle Kavga Edersiniz',
	usage: 'kavgaet'
};
	