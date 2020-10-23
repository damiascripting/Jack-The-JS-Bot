const express = require('express');
const app = express();
const port = 3000;
const connection = require('connection')
const ytdl = require('ytdl-core');

app.get('/', (req, res) => res.send('<h1>Servers Are <i>Online!</i></h1><p>Jack Stats: Alive With Uptime Robot, Being A Cool Robot.</p>'));

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
    msg.channel.send("Commands:\n*j/slurp*-Returns chill\n*j/chill*-Returns slurp\n*j/sing souja boi\n*j/about\n*j/support\n*lol\n*j/magic")
  }
  if (msg.content == 'j/sing soulja boi') {
    msg.channel.send("CRANK DAT SOULJA BOI")
  } else if (msg.content === '/panic') {
  } else if (msg.content === '/stop') {
    msg.channel.send("Thanks For Adding Me To Your Server! :) Type j/help For Commands!") 
  }
  if (msg.content == 'j/about') {
    msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: "About Jack the JS Bot",
    description: "Jack the Js Bot is the best in bot technology, including so many commands.",
    fields: [{
        name: "Version History",
        value: "This is currently verison 1.0, new versions will come out soon!"
      },
      {
        name: "Source",
        value: "Source is on [repl.it](https://repl.it/@LetsMakeaBOT/BOT), created by [@Whacko](https://repl.it/@Whacko) and [@damiascripting](https://repl.it/@damiascripting). Check out our [team!](https://repl.it/@LetsMakeaBOT)"
      },
      {
        name: "Development",
        value: "Jack the JS Bot is still in development, we are still working on more commands. You can still use the bot with the commands it has!"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© Jack The JS Bot 2020"
    }
  }
});
  } else if (msg.content == 'lol') {
    msg.react("😂")
  }
  if (msg.content == 'j/support') {
    msg.channel.send("discord.gg/ncqusx5")
  }
  if (msg.content == 'j/magic') {
    msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    title: "This is magic.",
    description: "Magic has just been made.",
    fields: [{
        name: "How?",
        value: "Thanks to [@Whacko](https://repl.it/@Whacko) and [@damiascripting](https://repl.it/@damiascripting)"
      },
      {
        name: "What is magic?",
        value: "Wow you actually thought this was magic..."
      },
      {
        name: "THIS ISN'T MAGIC",
        value: "This is just a message embed we coded."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "© Jack The JS Bot"
    }
  }
});
  }

});

client.login(process.env.DISCORD_TOKEN);