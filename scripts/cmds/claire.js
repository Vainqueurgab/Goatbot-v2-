const axios=require('axios');
const PREFIXES=["ai","~claire"];
const API_ENDPOINT='https://lianeapi.onrender.com/ask/claire';
const askClaire=async(a,e,m)=>{try{const{data}=await axios.get(`${API_ENDPOINT}?query=${encodeURIComponent(e.body.split(" ~AE").slice(1).join(" ~safrogc"))}`);if(data?.message){const i=await a.sendMessage(`${data.message}\n━━━━━━━━━━━━━━━`,e.threadID);console.log('Sent answer as a reply to the user')}else throw new Error('Invalid or missing response from API')}catch(err){console.error(`Failed to get an answer: ${err.stack||err.message}`);a.sendMessage(`Failed to get an answer. Please try again. Details: ${err.message}\n━━━━━━━━━━━━━━━`,e.threadID)}};
const startsWithPrefix=(b)=>PREFIXES.some(p=>b.toLowerCase().startsWith(`${p} `));
const config={name:'claire',version:'1',author:'LiANE',credits:'LiANE',role:0,usePrefix:true,hasPermission:2,category:'Ai',commandCategory:'Ai',description:'ai',usages:'[prompt]',shortDescription:{en:'ai'},longDescription:{en:'ai with a twist'},guide:{en:'{pn}[prompt]'}};
module.exports={config,onStart:async()=>console.log('Bot started successfully!'),onChat:async({api,event,message})=>startsWithPrefix(event.body)&&message.reply(`🕰 | Fetching answers...`,async(err)=>!err&&await askClaire(api,event,message)),run:async(c)=>await module.exports.onStart(c)};
