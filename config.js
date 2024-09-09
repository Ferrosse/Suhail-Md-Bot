const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347084559732";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_01_57_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhXTjdEajZ5VFhUbloxa0RpaWlvbXAyZXZST2N3enBDK3FCV1c0d3c0ZU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhVWmxsMnVqUnVpT1BQVnRoYXJ4TWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2MyODI3YzctMmE0NS00ZDA5LWIyOTktYzNkM2M5NzBjOTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMjA4LFxuICAgICAgMjM3LFxuICAgICAgMTU4LFxuICAgICAgMTMxLFxuICAgICAgNjMsXG4gICAgICAzMyxcbiAgICAgIDIwMCxcbiAgICAgIDUwLFxuICAgICAgNzgsXG4gICAgICAyMjQsXG4gICAgICAxMDAsXG4gICAgICA1NCxcbiAgICAgIDEyMixcbiAgICAgIDE3NixcbiAgICAgIDAsXG4gICAgICAxMCxcbiAgICAgIDE5NyxcbiAgICAgIDExNyxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDY0LFxuICAgICAgMTkxLFxuICAgICAgMjQ3LFxuICAgICAgMTQ4LFxuICAgICAgMTE1LFxuICAgICAgMTE2LFxuICAgICAgMjI1LFxuICAgICAgMjIxLFxuICAgICAgMzAsXG4gICAgICAxNDMsXG4gICAgICAxNTEsXG4gICAgICAyMjMsXG4gICAgICAzNCxcbiAgICAgIDIxOSxcbiAgICAgIDEyNSxcbiAgICAgIDU0LFxuICAgICAgMjQwLFxuICAgICAgMTI5LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg4RkNZTTdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg0NTU5NzMyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ2MjU3MzM0NjY5Mzg2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzMwNEtNQkVQaXIrYllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoMkp4S2U2Vkkzc0REVW9VdndyQ2tKbzVjK3NnbCtZY2dVNTRjRTJWb1VBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJRMFBoSm5HZHlsVm04UWZCdWFqRHlCTVliaGpZQzQwKzRnRmNTQjRvaUdYc2RnRjdlT0w0R0xRSU9ubGRjYURqNVE3VThObkFOd1pSMndxdHhXakFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBlZUsxMGFyUUN1TENIbkxYSGhTSHQ0elVFdzVRSWkvcnBiZHFnN25ha3VLTk1QTGZ4WEliTUVyYmhjY05LNmVweVJkRUh2NDdINW4rVWdodkxsZmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODQ1NTk3MzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTg0NzAzNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
