const express = require('express');
const app = express();
const port = 3000;
const connection = require('connection')
const ytdl = require('ytdl-core');

app.get('/', (req, res) => res.send('<h1>Jack is <i>in!</i></h1>'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// START BOT CODE
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return; // Making sure the sender is not a bot
  if (msg.content == 'slurp') {
    msg.channel.send("chill")
  } else if (msg.content == 'chill') {
    msg.channel.send("slurp")
  } else if (msg.content == '/help') {
    msg.channel.send("Commands:\n*slurp*-Returns chill\n*chill*-Returns slurp")
  }
  if (msg.content == '/sing soulja boi') {
    msg.channel.send("CRANK DAT SOULJA BOI") //
  } else if (msg.content === '/panic') {
    msg.reply("You did a *bad* command, bro. You will take that ***BACK!***")
    setInterval(function() {
      msg.channel.send("EEK!!! *FREAK OUT!* ***FREAK OUUUUUUUUUUUUT!*** 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");
      msg.channel.send("EVERYBODY PANIC! EVERYBODY *PANIC!*")
    }, 10);
  }  
  if (msg.content == '!about') {
    msg.channel.send("Jack The JS Bot 1.0 Made By damiascripting and Whacko on repl.it")
  }

});

client.login(process.env.DISCORD_TOKEN);