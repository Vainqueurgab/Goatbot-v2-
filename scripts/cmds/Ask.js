const axios = require('axios');

const Prefixes = [
  '+ai',
  'salut',
  'oliver',
  'ai',
  'gabriel',
  '🍅',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "ZenildeXrene",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("♡ _♫__♡\n║║╔║║╔╗ ♫\n╠╣╠║║║║\n║║╚╚╚╚╝ ♫\n𝐒𝐚𝐥𝐮𝐭 𝐦𝐞𝐬 𝐜𝐡𝐞𝐫𝐬 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫𝐬. 𝐌𝐨𝐧 𝐧𝐨𝐦 𝐞𝐬𝐭 𝐆𝐚𝐛𝐫𝐢𝐞𝐥 𝐮𝐧𝐞 𝐢𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐞𝐥𝐥𝐞 𝐜𝐫𝐞́𝐞́𝐞 𝐩𝐚𝐫 ❍❦ 𝐆𝐚𝐛𝐫𝐢𝐞𝐥 𝐎𝐥𝐢𝐯𝐞𝐫 ❍❦. 𝐏𝐨𝐬𝐞𝐳 𝐦𝐨𝐢 𝐯𝐨𝐬 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 𝐞𝐭 𝐣𝐞 𝐯𝐨𝐮𝐬 𝐨𝐟𝐟𝐫𝐢𝐫𝐚𝐢 𝐝𝐞 𝐦𝐞𝐢𝐥𝐥𝐞𝐮𝐫𝐬 𝐫𝐞́𝐬𝐮𝐥𝐭𝐚𝐭𝐬(✿◠‿◠)\n┈┈┈╲┈┈┈┈╱\n┈┈┈╱▔▔▔▔╲\n┈┈┃┈▇┈┈▇┈┃\n╭╮┣━━━━━━┫╭╮\n┃┃┃┈┈┈┈┈┈┃┃┃\n╰╯┃┈┈┈┈┈┈┃╰╯\n┈┈╰┓┏━━┓┏╯\n┈┈┈╰╯┈┈╰╯\n☙∬✰𝐃𝐀𝐑𝐒𝐎𝐍✰∬❦");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `\n♡ _♫__♡\n║║╔║║╔╗ ♫\n╠╣╠║║║║\n║║╚╚╚╚╝ ♫
𝐆𝐀𝐁𝐑𝐈𝐄𝐋 🎯
●══════❍══════●
${answer} 
●══════❍══════●
❦✰𝐆𝐀𝐑𝐑𝐈𝐄𝐋✰❦ `,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};;
