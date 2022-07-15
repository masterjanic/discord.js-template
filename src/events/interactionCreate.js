'use strict';

module.exports = {
  once: false,
  execute: (client, interaction) => {
    if (!interaction.isCommand() && !interaction.isContextMenu()) return;

    try {
      if (interaction.isCommand()) {
        return client.commands.get(interaction.commandName)?.execute(interaction);
      }

      if (interaction.isModalSubmit()) {
        return client.modals.get(`modal-${interaction.customId}`)?.execute(interaction);
      }

      if (interaction.isContextMenu()) {
        return client.contextMenus.get(`context-${interaction.customId}`)?.execute(interaction);
      }

      if (interaction.isSelectMenu()) {
        return client.selectMenus.get(`select-${interaction.customId}`)?.execute(interaction);
      }
    } catch (err) {
      console.error(err);
    }
  },
};
