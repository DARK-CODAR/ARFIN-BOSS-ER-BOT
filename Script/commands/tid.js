module.exports.config = {
    name: "tid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐈𝐒𝐋𝐀𝐌 𝐀𝐅𝐈",
    description: "Get box id",
    commandCategory: "group",
    usages: "tid",
    cooldowns: 5,
    dependencies: '',
};

module.exports.run = async function({ api, event }) {
    api.sendMessage("ID of this thread: " + event.threadID, event.threadID, event.messageID);
};