module.exports.config = {
    name: "restart",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐁𝐎𝐒𝐒 𝐄𝐑 𝐁𝐎𝐓 ☠︎︎ ",
    description: "Restart Bot",
    commandCategory: "system",
    usages: "",
    cooldowns: 5
};

module.exports.run = async({ api, event, args }) => {
    const { threadID, messageID } = event;
    return api.sendMessage(`${global.config.BOTNAME} Bot are now Restarting...`, threadID, () => process.exit(1));
}