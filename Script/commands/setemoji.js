module.exports.config = {
    name: "setemoji",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐄𝐑🌺𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ☢️",
    description: "Change emoji in group",
    commandCategory: "Group",
    usages: "setemoji [emoji]",
    cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    const emoji = args.join(" ")
    api.changeThreadEmoji(`${args.join(" ")}`, event.threadID, event.messagaID);
}