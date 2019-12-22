const Discord = require('discord.js')

exports.run = (client, message, params) => {
client.users.forEach(m =>{
  m.send(
  `
# Sanalda çok nitro sunucusu var fakat hiçbiri gerçekten vermiyor ancak 4 kişilik kurmuş olduğumz ekip ücretsiz nitro dağıtıyor ve almak çok kolay !!

https://discord.gg/ptjjTAw
@everyone
`
  )
})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'saat',
    description: 'saat',
    usage: 'saat'
};
