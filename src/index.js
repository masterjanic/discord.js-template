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
for (const file of eventFiles) {
  const eventName = file.split('.')[0];
  const event = require(`./events/${file}`);

  if (event.once) {
    client.once(eventName, (...args) => event.execute(client, ...args));
  } else {
    client.on(eventName, (...args) => event.execute(client, ...args));
  }
}

module.exports = client.login(token);
