


/* eslint-disable no-unused-vars */
const Discord = require("discord.js")
module.exports.run = async (client, message, args, utils, data) => {
const { parse } = require('twemoji-parser')
const emoji = args[0]

// Input
if (!emoji) return message.channel.send('Error! No emoji provided!')

// Executing
let custom = Discord.Util.parseEmoji(emoji);

const embed = new Discord.MessageEmbed()
  .setTitle(`${emoji}'s large version:`)
  .setColor('#303030')
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
if (custom.id) {
  embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`)
  return message.channel.send(embed)
}
else {
  let parsed = parse(emoji, { assetType: "png" });
  if (!parsed[0]) return message.channel.send('Error! Invalid Emoji Provided! Please provide an emoji to enlarge!')

  embed.setImage(parsed[0].url);
  return message.channel.send(embed)
}
};

module.exports.help = {
	aliases: ['large'],
	name: 'enlarge',
	description: 'Getting the img of an emoji',
	usage: '..enlarge %emoji%',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'utility',
	disable: false,
	cooldown: 1000,
};
