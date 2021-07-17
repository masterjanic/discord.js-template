'use strict';

/*
  This is an example interaction command. You can add your options and other properties to the data object below.
 */
module.exports = {
  data: {
    name: 'example',
    description: 'This is an example interaction!',
  },
  execute: interaction => {
    const milliseconds = Date.now();
    return interaction.reply(`A total of **${milliseconds}** milliseconds elapsed since January 1, 1970 00:00:00 UTC!`);
  },
};
