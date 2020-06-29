let pingWasHere= new Set();
module.exports = message => {
  if (pingWasHere.has(message.author.id)) {
    return;
  }
  pingWasHere.add(message.author.id);
  setTimeout(() => {
    pingWasHere.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(client.ayarlar.prefix)) return;
  let komut = message.content.split(" ")[0].slice(client.ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let pingYetkileri = client.elevation(message);
  var pingEsya;

  if (client.commands.has(komut)) {
    pingEsya = client.commands.get(komut);
  } else if (client.aliases.has(komut)) {
    pingEsya = client.commands.get(client.aliases.get(komut));
  }
  if (pingEsya) {
    if (pingYetkileri < pingEsya.conf.permLevel) return message.channel.send("Yetersiz yetki!");
    pingEsya.run(client, message, params, pingYetkileri);
  }
};
