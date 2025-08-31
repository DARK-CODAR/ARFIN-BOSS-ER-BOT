const fs = require("fs");
module.exports.config = {
    name: "/",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐄𝐑🌺𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ☢️",
    description: "prefix awto reaction",
    commandCategory: "No command marks needed",
    usages: "prefix reaction",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("/") == 0 || (event.body.indexOf("/") == 0)) {
        var msg = {
            body: ".",
            attachment: fs.createReadStream(__dirname + `/noprefix/.`)
        }
        api.sendMessage(msg, threadID, messageID);
        api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
    }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}