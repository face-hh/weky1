/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
    const ae = Math.floor(Math.random() * 20)
let uwu = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .setDescription(`Your brain exploded from that much learning, so u bought a new one.`)
      .setFooter(`Got ${ae} IQ ;)`)
      .setColor("GREEN")
      message.reply(uwu)
      client.ADDIQ(message.author.id, ae)
};
module.exports.help = {
	aliases: [],
	name: 'study',
	description: 'Get IQ for a job',
	usage: config.prefix + 'study',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 100000,
};
