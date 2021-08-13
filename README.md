<div align="center">
  <h1>
    discord.js-template
  </h1>
  <p>
    <a href="https://discord.com/invite/uZ6q4jw"><img src="https://img.shields.io/discord/768055408542744587?color=7289da&logo=discord&logoColor=white?maxAge=3600" alt="Discord server" /></a>
    <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository"><img src="https://img.shields.io/badge/license-Apache2.0-green" alt="License" /></a>
    <a href="https://www.paypal.com/paypalme/janicblmn"><img src="https://img.shields.io/badge/donate-PayPal-F96854.svg" alt="PayPal" /></a>
  </p>
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Contact](#contact)

## About
`discord.js-template` can be used as a base for a newly created [discord.js](https://discord.js.org) bot project.
It features event and interaction command handling. Additionally `eslint` with `prettier` is set up to keep your code clean.

## Installation
To get started clone this repository and run `npm install`.

### Dependencies
The following dependencies will be installed:
- discord.js **(LATEST/v13)**
  - With additional dependencies: 
    - [bufferutil](https://www.npmjs.com/package/bufferutil) or a much faster WebSocket connection
    - [utf-8-validate](https://www.npmjs.com/package/utf-8-validate) in combination with `bufferutil` for much faster WebSocket processing
    - [zlib-sync](https://www.npmjs.com/package/zlib-sync) for WebSocket data compression and inflation
- [nodemon](https://www.npmjs.com/package/nodemon) for auto-restarting while developing

### Scripts
There are **3** premade scripts for running the Discord bot:
- `npm run start`: Run the bot normally
- `npm run start:dev`: Run the bot with **Nodemon**
- `npm run start:pm2`: Run the bot with **pm2** (You will need to have pm2 installed locally `npm i -g pm2`)

### Examples
See the created `interactions` folder for a documented example interaction.

## Contact
If you have any questions regarding this repository, please contact me via:
- **Discord:** Janic#0474
- **Community Discord:** https://discord.com/invite/uZ6q4jw
