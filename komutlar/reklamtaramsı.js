const Discord = require('discord.js');
exports.run = (client, msg, args) => {
 const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
 const members2 = msg.guild.members.filter(member => member.user.username && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.username));
  msg.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Kimse oynuyor kısmına reklam koymamış.");
  return msg.channel.send(members2.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Kimse adına kısmına reklam koymamış.");
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ["reklamtaraması", "reklambul", "rtaraması"]
};

exports.help = {
 name: 'reklamtaraması',
 description: 'Returns a list of members with an invite as their game.',
 usage: 'checkinvites'
};
