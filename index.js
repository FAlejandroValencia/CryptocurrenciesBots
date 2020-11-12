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




const main = async () => {

  var interval = setInterval (function () {

  clientOne.on('ready', async () => {
  console.log(`Logged in as ${clientOne.user.tag}!`);
  const BotData = ['755175493782994974', '774851343776874526', '775426005149548554', '775426394586742794', 'BTC-USD']
  operations.process(clientOne, BotData[0], BotData[1], BotData[2], BotData[3], BotData[4])
});

clientTwo.on('ready', async () => {
  console.log(`Logged in as ${clientTwo.user.tag}!`);
  const BotData = ['755175493782994974', '775415827583336499', '775426005149548554', '775426394586742794', 'ETH-USD']
  operations.process(clientTwo, BotData[0], BotData[1], BotData[2], BotData[3], BotData[4])
});

clientThree.on('ready', async () => {
  console.log(`Logged in as ${clientThree.user.tag}!`);
  const BotData = ['755175493782994974', '775443907781722113', '775426005149548554', '775426394586742794', 'LTC-USD']
  operations.process(clientThree, BotData[0], BotData[1], BotData[2], BotData[3], BotData[4])
});

clientFour.on('ready', async () => {
  console.log(`Logged in as ${clientFour.user.tag}!`);
  const BotData = ['755175493782994974', '775452566489661461', '775426005149548554', '775426394586742794', 'XRP-USD']
  operations.process(clientFour, BotData[0], BotData[1], BotData[2], BotData[3], BotData[4])
});

}, 30000);
}

main()