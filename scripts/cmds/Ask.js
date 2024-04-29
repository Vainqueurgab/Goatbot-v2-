ask.js 
const axios = require('axios');

const Prefixes = [
  '+ai',
  'Darson',
  'Dar',
  'darson',
  'ai',
  'ask',
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
        await message.reply("┈┈┈╲┈┈┈┈╱\n┈┈┈╱▔▔▔▔╲\n┈┈┃┈▇┈┈▇┈┃\n╭╮┣━━━━━━┫╭╮\n┃┃┃┈┈┈┈┈┈┃┃┃\n╰╯┃┈┈┈┈┈┈┃╰╯\n┈┈╰┓┏━━┓┏╯\n┈┈┈╰╯┈┈╰╯\nღ✰𝗢𝗹𝗶𝘃𝗲𝗿 𝗴𝗮𝗯𝗿𝗶𝗲𝗹✰ღ \n♡ _♫__♡\n║║╔║║╔╗ ♫\n╠╣╠║║║║\n║║╚╚╚╚╝ ♫.");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `ღ✰𝗢𝗹𝗶𝘃𝗲𝗿 𝗴𝗮𝗯𝗿𝗶𝗲𝗹✰ღ 
\n♡ _♫__♡\n║║╔║║╔╗ ♫\n╠╣╠║║║║\n║║╚╚╚╚╝ ♫
━━━━━━♡♤♡━━━━━
${answer} 
━━━━━━♡♤♡━━━━━━
✰ 𝗚𝗮𝗯𝗿𝗶𝗲𝗹 ✰ `,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};;
