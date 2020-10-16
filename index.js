const express = require('express');
const app = express();
const port = 3000;
const connection = require('connection')
const ytdl = require('ytdl-core');

app.get('/', (req, res) => res.send('<h1>Servers Are <i>Online!</i></h1>'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// START BOT CODE
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return; // Making sure the sender is not a bot
  if (msg.content == 'j/slurp') {
    msg.channel.send("chill")
  } else if (msg.content == 'j/chill') {
    msg.channel.send("slurp")
  } else if (msg.content == 'j/help') {
    msg.channel.send("Commands:\n*j/slurp*-Returns chill\n*j/chill*-Returns slurp\n*j/sing souja boi\n*j/about\n*j/support")
  }
  if (msg.content == 'j/sing soulja boi') {
    msg.channel.send("CRANK DAT SOULJA BOI")
  } else if (msg.content === '/panic') {
  } else if (msg.content === '/stop') {
       msg.channel.send("Thanks For Adding Me To Your Server! :) Type j/help For Commands!") 
  }
  if (msg.content == 'j/about') {
    msg.channel.send("**Jack The JS Bot 1.0**\n*Build by Whacko (https://repl.it/@Whacko) and damiascripting (http://repl.it/@damiascripting)*\n*Yeah, we cool. :sunglasses:*")
  }
  if (msg.content == 'j/support') {
    msg.channel.send("discord.gg/AmyWhY")
  }


});

client.login(process.env.DISCORD_TOKEN);