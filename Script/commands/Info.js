module.exports.config = {
    name: "info",
    version: "1.2.6",
    hasPermssion: 0,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐁𝐎𝐒𝐒 𝐄𝐑 𝐁𝐎𝐓 ☠︎︎ ",
    description: "Bot information command",
    commandCategory: "For users",
    hide: true,
    usages: "",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users, Threads }) {
    const { threadID } = event;
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    const moment = require("moment-timezone");

    const { configPath } = global.client;
    delete require.cache[require.resolve(configPath)];
    const config = require(configPath);

    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = threadSetting.hasOwnProperty("PREFIX") ? threadSetting.PREFIX : config.PREFIX;

    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const totalUsers = global.data.allUserID.length;
    const totalThreads = global.data.allThreadID.length;

    const msg = `╭⭓ ⪩ 𝐁𝐎𝐓𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 ⪨
│
├─ 🤖 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ─𝐀𝐑𝐅𝐈𝐍 𝐁𝐎𝐒𝐒 𝐄𝐑 𝐁𝐎𝐓 ☠︎︎ 
├─ ☢️ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${config.PREFIX}
├─ ♻️ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗕𝗼𝘅 : ${prefix}
├─ 🔶 𝗠𝗼𝗱𝘂𝗹𝗲𝘀 : ${commands.size}
├─ 🔰 𝗣𝗶𝗻𝗴 : ${Date.now() - event.timestamp}ms
│
╰───────⭓

╭⭓ ⪩ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ⪨
│
├─ 👑 𝗡𝗮𝗺𝗲 : 𝐀𝐑𝐅𝐈𝐍 𝐈𝐒𝐋𝐀𝐌 𝐀𝐅𝐈
├─ 📲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
│ https://www.facebook.com/Arfinafi69
├─ 💌 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
│ https://m.me/arfinafi69
├─ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
│ wa.me/+8801928192823
│
╰───────⭓

╭⭓ ⪩ 𝗔𝗖𝗧𝗜𝗩𝗜𝗧𝗜𝗘𝗦 ⪨
│
├─ ⏳ 𝗔𝗰𝘁𝗶𝘃𝗲 𝗧𝗶𝗺𝗲 : ${hours}h ${minutes}m ${seconds}s
├─ 📣 𝗚𝗿𝗼𝘂𝗽𝘀 : ${totalThreads}
├─ 🧿 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿𝘀 : ${totalUsers}
╰───────⭓

❤️ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 🌺
 😍──⃝‌‌𝐀𝐑𝐅𝐈𝐍 𝐁𝐎𝐒𝐒 𝐄𝐑 𝐁𝐎𝐓 ☠︎︎ 😘`;

    const imgLinks = [
        "https://imgur.com/TS7MP4u",
        "https://i.imgur.com/sxSn1K3.jpeg",
        "https://imgur.com/HqNSS5M",
        "https://imgur.com/DCb0sST"
    ];

    const imgLink = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const callback = () => {
        api.sendMessage({
            body: msg,
            attachment: fs.createReadStream(__dirname + "/cache/info.jpg")
        }, threadID, () => fs.unlinkSync(__dirname + "/cache/info.jpg"));
    };

    return request(encodeURI(imgLink)).pipe(fs.createWriteStream(__dirname + "/cache/info.jpg")).on("close", callback);
};