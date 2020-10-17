# This Is Where You Store Code For Commands That Are Still Being Worked On.
# -------------------------------------
1. Magic 8 Ball
  }
 else if (msg.content.startsWith == 'j/magic-eight-ball') {
    msg.reply("You asked the magic 8 ball:\n" + msg.content.slice(20, msg.content.length))
    msg.reply("The magic 8 ball said:")
    var posible = ['Yes', 'Outlook good', 'Ask again later', 'Absolutely not!', 'totally.']
    msg.reply(posible[Math.floor(Math.random() * 5) + 0])
