module.exports.config = {
    name: "load",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐄𝐑🌺𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ☢️",
    description: "reload config file data",
    commandCategory: "Admin",
    usages: "[]",
    cooldowns: 30
};
module.exports.run = async function({ api, event, args, Threads, Users }) {
    delete require.cache[require.resolve(global.client.configPath)];
    global.config = require(global.client.configPath);
    return api.sendMessage("[OK] Reloading config...", event.threadID, event.messageID);
}