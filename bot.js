const Discord = require('discord.js');
const client = new Discord.Client();
const heros = new Discord.Client();
const other = new Discord.Client();


client.on('ready', async () => {
      let ReBeL = [" تم انتهاء صلاحية لبوت يرجا تكلم معا Ḿiĉhǿu#0001"]
  setInterval(() => {
client.channels.get("497802555296841743").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},5000);
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login(process.env.BOT_TOKEN);
client.login(process.env.SPAM);
heros.login(process.env.HER);
other.login(process.env.OTH);
