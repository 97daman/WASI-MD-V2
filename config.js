//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";
"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhOSmYyZkxQYWtaYmZxc0dJWnYwY0JiUmxXb1Zqdk9XVVpjSHZMbUpHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGZkQmJOc2JzZlQ5NXR3dTUxZE1qdDRwMlVmdXIzZm8xa0pOa01GUHFubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTjBVYzVEVmJ2QXVHaDI0cjhDQ1d3Q1dNOHFzRSt6c0tUOVNSSXBkcjBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTUF4UVYrcU1KbmY0Yks2bFJEcUVESlhNbWNBL3k2bEhXOW9tRU9QTXlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQT0REclJHRmdMN2ZDeHZDZTJXWUQ3WjFBNkdFQWZlOU1Dam93a1hnVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkljNFgwTVN4QkN3VlJLb2xjRVFwbllyWDJ2dUhXNHZjelIxUVJwcDBzbGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRpZU5WL1ViTFl3UXRibkNsWGZSaWxXY1Y1VFM0TXR5dWwwUDN5QXdWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzFaNTdOaTZpcmFEdDU0TW5UN0luQ0NoNGNjc0pMOGlGaCtrQTNXcXF3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFTklPc2hKYUtQL3FnV1hjT25JRkpTYnBwQUJrK0VEREJXUWJxNTV4WmJNRUNWZmNUMWgvdTN5SzQ0cSs0OTdjZjgwMXNqekNPZ05ENkVGbUQ5MUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJKa1cxbUN2RDAyN0hSK3RwVmsybksyV0pkRkVZZ25yd3c5SkVGaUl5blJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhTnRUcllXelFxdUoxc3dGNUUtTml3IiwicGhvbmVJZCI6Ijg4ZWFkYTU1LWU3N2QtNDk3OC1hYTI5LTUwNTY3YTIzOTMxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPeExiTGtoa0tFNW9sN1lBUDJjSDQyRHZaV2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1RvSktaS0F0NXpOMDl6bkd5Y0l5MTF3RVNnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFZS0tZOFlXIiwibWUiOnsiaWQiOiIyNTQ3OTQ5MzIyMTY6MzFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2b3FwRUNFSmJ6enJRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxJMkZ3bkY2VThLcHBnNFl2KzV5MW1KU2p1UlR2QW1OWXdCbko5WUxMQ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpIZ2hkVlNBNlVRRVFQYkwxcXJ1djZGaFlveHdkSTAxdS9VSDhScnBnWXV2OHF0dzJsOTl2M1FVbDArZ0lIZHRQVkduSVJCSzdIeVFrZnIzWFE3SER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsVjdKZlpEQU0vZU1nNkZDVDVmQzBGeVRxNjVGM05EbW5wS2FRK0FLNlk0cXhVOU9DckFHTzNVUjZaTlRGRW05VEdUR2pZTml6R1o1R1VjbUNWckdDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NDkzMjIxNjozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaU05oY0p4ZWxQQ3FhWU9HTC91Y3RaaVVvN2tVN3dKaldNQVp5ZldDeXdwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTU3MzQ3fQ=="
global.SESSION_ID =
 "1YKKY8YWeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhOSmYyZkxQYWtaYmZxc0dJWnYwY0JiUmxXb1Zqdk9XVVpjSHZMbUpHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGZkQmJOc2JzZlQ5NXR3dTUxZE1qdDRwMlVmdXIzZm8xa0pOa01GUHFubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTjBVYzVEVmJ2QXVHaDI0cjhDQ1d3Q1dNOHFzRSt6c0tUOVNSSXBkcjBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTUF4UVYrcU1KbmY0Yks2bFJEcUVESlhNbWNBL3k2bEhXOW9tRU9QTXlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQT0REclJHRmdMN2ZDeHZDZTJXWUQ3WjFBNkdFQWZlOU1Dam93a1hnVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkljNFgwTVN4QkN3VlJLb2xjRVFwbllyWDJ2dUhXNHZjelIxUVJwcDBzbGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRpZU5WL1ViTFl3UXRibkNsWGZSaWxXY1Y1VFM0TXR5dWwwUDN5QXdWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzFaNTdOaTZpcmFEdDU0TW5UN0luQ0NoNGNjc0pMOGlGaCtrQTNXcXF3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFTklPc2hKYUtQL3FnV1hjT25JRkpTYnBwQUJrK0VEREJXUWJxNTV4WmJNRUNWZmNUMWgvdTN5SzQ0cSs0OTdjZjgwMXNqekNPZ05ENkVGbUQ5MUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJKa1cxbUN2RDAyN0hSK3RwVmsybksyV0pkRkVZZ25yd3c5SkVGaUl5blJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhTnRUcllXelFxdUoxc3dGNUUtTml3IiwicGhvbmVJZCI6Ijg4ZWFkYTU1LWU3N2QtNDk3OC1hYTI5LTUwNTY3YTIzOTMxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPeExiTGtoa0tFNW9sN1lBUDJjSDQyRHZaV2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1RvSktaS0F0NXpOMDl6bkd5Y0l5MTF3RVNnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFZS0tZOFlXIiwibWUiOnsiaWQiOiIyNTQ3OTQ5MzIyMTY6MzFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2b3FwRUNFSmJ6enJRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxJMkZ3bkY2VThLcHBnNFl2KzV5MW1KU2p1UlR2QW1OWXdCbko5WUxMQ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpIZ2hkVlNBNlVRRVFQYkwxcXJ1djZGaFlveHdkSTAxdS9VSDhScnBnWXV2OHF0dzJsOTl2M1FVbDArZ0lIZHRQVkduSVJCSzdIeVFrZnIzWFE3SER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsVjdKZlpEQU0vZU1nNkZDVDVmQzBGeVRxNjVGM05EbW5wS2FRK0FLNlk0cXhVOU9DckFHTzNVUjZaTlRGRW05VEdUR2pZTml6R1o1R1VjbUNWckdDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NDkzMjIxNjozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaU05oY0p4ZWxQQ3FhWU9HTC91Y3RaaVVvN2tVN3dKaldNQVp5ZldDeXdwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTU3MzQ3fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
