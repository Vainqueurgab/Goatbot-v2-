const axios=require('axios');

const apiEndpoint='https://sandipapi.onrender.com/gpt';

module.exports={config:{name:"ai",version:1.0,author:"coffee",longDescription:"AI",category:"ai",guide:{en:"{p}questions"}},onStart:async()=>{},onChat:async({event,message})=>{try{const{body}=event;if(!(body&&body.toLowerCase().startsWith("ai")))return;const prompt=body.substring(2).trim();if(!prompt)return await message.reply(𝗘𝘀𝘁𝗵𝗲𝗿 𝗜𝗔💧 \n━━━━━━━━━━━━━━━\n 𝒔𝒂𝒍𝒖𝒕 𝒑𝒐𝒔𝒆 𝒗𝒐𝒔 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏 𝑩𝑶𝑻 𝑬𝒔𝒕𝒉𝒆𝒓 💫𝗰𝗼𝗻𝘁𝗮𝗰𝘁 𝗹'𝗮𝗱𝗺𝗶𝘀𝘁𝗿𝗮𝘁𝗲𝘂𝗿 𝗱𝘂 𝗯𝗼𝘁 ʚʬɞ Gabriel ʚʬɞ 𝒍𝒊𝒆𝒖𝒏 [ https://www.facebook.com/profile.php?id=100095725560244 ]\n━━━━━━━━━━━━━━━");const response=await axios.get(`${apiEndpoint}?prompt=${encodeURIComponent(prompt)}`);if(response.status===200)await message.reply(𝗘𝘀𝘁𝗵𝗲𝗿 𝗜𝗔💧\n━━━━━━━━━━━━━━━ here is your answer..; \n${response.data.answer}\n━━━━━━━━━━━━━━━`);else throw new Error(`Failed to fetch data. Status: ${response.status}`);}catch(error){console.error("Error:",error.message);}}};
