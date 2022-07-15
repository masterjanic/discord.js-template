'use strict';

module.exports = {
  data: {
    name: 'example',
    // Or MESSAGE
    type: 'USER',
  },
  execute: interaction => {
    console.log(interaction);
  },
};
