             /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
let avatar
if(member.id === message.author.id) {
avatar = member.displayAvatarURL({format: 'jpg',size: 128 });}else {avatar = member.user.displayAvatarURL({format: 'jpg',size: 128 })}      

const att = `https://api.monkedev.com/canvas/petpet?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `patpat.gif`);
    message.channel.send(attachment);
   
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'petpet',
                      description: 'Putting your pfp in a petpet gif.',
                      usage: config.prefix + 'petpet {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };