'use strict';

const { readdirSync } = require('fs');

/*
  This is an example for an event.
  There will always be the client object and the additional arguments of the specific event available.
 */
module.exports = {
  once: true,
  execute: client => {
    // This will consider the bot process as 'online' (only if running with pm2)
    if (typeof process.send === 'function') process.send('ready');

    const { commands, modals, contextMenus, selectMenus, application } = client;

    const commandFiles = readdirSync('./src/commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const commandInteraction = require(`../commands/${file}`);
      commands.set(commandInteraction.data.name, commandInteraction);
    }

    /* Uncomment for local command testing
    for (const guild of [...client.guilds.cache.values()]) {
      await guild.commands.set([...commands.map(i => i.data)]);
    }
    */

    const modalFiles = readdirSync('./src/modals').filter(file => file.endsWith('.js'));
    for (const file of modalFiles) {
      const modalInteraction = require(`../modals/${file}`);
      modals.set(`modal-${modalInteraction.customId}`, modalInteraction);
    }

    const contextMenuFiles = readdirSync('./src/context-menus').filter(file => file.endsWith('.js'));
    for (const file of contextMenuFiles) {
      const contextMenuInteraction = require(`../context-menus/${file}`);
      contextMenus.set(`context-${contextMenuInteraction.data.name}`, contextMenuInteraction);
    }

    const selectMenuFiles = readdirSync('./src/select-menus').filter(file => file.endsWith('.js'));
    for (const file of selectMenuFiles) {
      const selectMenuInteraction = require(`../select-menus/${file}`);
      selectMenus.set(`select-${selectMenuInteraction.customId}`, selectMenuInteraction);
    }

    return application.commands?.set([...commands.map(i => i.data)]);
  },
};
