const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;
const ownerid = process.env.OWNER_ID;

client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    console.log(client.message.content);
});
client.login(token);
