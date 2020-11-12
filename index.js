const Discord = require('discord.js');

require('dotenv-flow').config();

const operations = require('./archive')

const clientOne = new Discord.Client();
clientOne.login(process.env.TokenOne);

const clientTwo = new Discord.Client();
clientTwo.login(process.env.TokenTwo);

const clientThree = new Discord.Client();
clientThree.login(process.env.TokenThree);

const clientFour = new Discord.Client();
clientFour.login(process.env.TokenFour);



 function main() {

  setInterval (function () {

  clientOne.on('ready', async () => {
  console.log(`Logged in as ${clientOne.user.tag}!`);
  const BotData = ['774851343776874526', 'BTC-USD']
  operations.process(clientOne, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1])
});


  clientTwo.on('ready', async () => {
  console.log(`Logged in as ${clientTwo.user.tag}!`);
  const BotData = ['775415827583336499', 'ETH-USD']
  operations.process(clientTwo, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1])
});

  clientThree.on('ready', async () => {
  console.log(`Logged in as ${clientThree.user.tag}!`);
  const BotData = ['775443907781722113', 'LTC-USD']
  operations.process(clientThree, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1])
});

  clientFour.on('ready', async () => {
  console.log(`Logged in as ${clientFour.user.tag}!`);
  const BotData = ['775452566489661461', 'XRP-USD']
  operations.process(clientFour, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1])
});

}, 5 * 60000);

}



main()


