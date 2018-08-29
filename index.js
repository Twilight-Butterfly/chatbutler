// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('twitch.tv/TwilightStarLlama', {type: 'WATCHING'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'hello') return msg.channel.send('Hello Hello!');
    else if (command === 'cookie') return msg.channel.send(':cookie:');
});

client.login(process.env.TOKEN);
