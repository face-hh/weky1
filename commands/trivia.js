const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "In what Weky's was coded",
    options: ["JavaScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "When Weky's official support server was created",
    options: ["03/02/2021", "03/01/2021", "12/03/2021", "25/02/2021"],
    correct: 2,
  },
  {
    title: "What was the first bot coded by ImFace before Weky",
    options: ["OwO bot", "Wek bot", "IDJ bot", "UwU bot"],
    correct: 4,
  },
  {
    title: "When Roblox was launched?",
    options: ["September 15, 2005", "September 1, 2006", "Octomber 1, 2006", "December 21, 2003"],
    correct: 2,
  },
  {
    title: "Who was the first youtuber",
    options: ["James John", "PewDiePie", "Zyo On", "Jawed Karim"],
    correct: 4,
  },
  {
    title: "What language was added first in the world",
    options: ["Siberian", "Sumerian", "Jokorian", "Egypteian"],
    correct: 1,
  },
  {
    title: "When the pepe was added as a meme?",
    options: ["2005", "2004", "2007", "2006"],
    correct: 1,
  },
  {
    title: "What was the first name for the pepe meme",
    options: ["FeelsBadMan", "PepeTheFrog", "FeelsWeirdMan", "FeelsBanMan"],
    correct: 2,
  }
];

module.exports.run = async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`RANDOM`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`✅ | You got it correct!`);
      } else {
        return message.channel.send(`❌ | You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`⏲️ | Your time has been expired.`);
    }
  }
  module.exports.config = {
    name: "trivia",
    description: "guess the question!",
    usage: "/trivia",
    accessableby: "Members",
    aliases: []
  }