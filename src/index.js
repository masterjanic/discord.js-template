'use strict';

const { readdirSync } = require('fs');
const { Client, Collection } = require('discord.js');
const { token } = require('../config.json');
const client = new Client({
  // You can define your needed intents. See https://discordjs.guide/popular-topics/intents.html#gateway-intents
  intents: ['GUILDS', 'GUILD_MESSAGES'],
  retryLimit: Infinity,
});
client.interactions = new Collection();

const eventFiles = readdirSync('./src/events').filter(file => file.endsWith('.js'));
eventFiles.forEach(file => client.on(file.split('.')[0], require(`./events/${file}`).bind(null, client)));

module.exports = client.login(token);
