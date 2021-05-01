/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');
function clean(text) {
	if (typeof (text) === 'string') {return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));}
	else {return text;}
}
module.exports.run = async (client, message, args, utils, data) => {
    const string = args.slice(0).join(" ")
      if(!string) return message.reply(`No status`)
      client.setStatus(message.author.id, clean(string))
        message.channel.send(new Discord.MessageEmbed()
        .setDescription('Changed status\n```diff\n+ ' + clean(string)+ '\n- '+ await client.status(message.author.id)+'```')
        .setTitle(`Success`)
        .setColor("RANDOM")
        .setFooter('..profile to see your status!')
        )
    };
module.exports.help = {
	aliases: [],
	name: 'setstatus',
	description: 'Set your status',
	usage: config.prefix + 'setstatus %status%',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 100000,
};
