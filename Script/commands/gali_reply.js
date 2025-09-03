const fs = require("fs");
module.exports.config = {
    name: "gali",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐁𝐎𝐒𝐒 𝐄𝐑 𝐁𝐎𝐓 ☠︎︎ ",
    description: "no prefix",
    commandCategory: "no prefix",
    usages: "abal",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("Arfin Bokasoda") == 0 || event.body.indexOf("Arfin mc") == 0 || event.body.indexOf("chod") == 0 || event.body.indexOf("Arfin nodir pola") == 0 || event.body.indexOf("bc") == 0 || event.body.indexOf("Arfin re chudi") == 0 || event.body.indexOf("Arfin re chod") == 0 || event.body.indexOf("Arfin Abal") == 0 || event.body.indexOf("Arfin Boakachoda") == 0 || event.body.indexOf("Arfin madarchod") == 0 || event.body.indexOf("Arfin re chudi") == 0 || event.body.indexOf("Sahu Bokachoda") == 0) {
        var msg = {
            body: "তোর মতো বোকাচোদা রে আমার বসআরফিন চু*দা বাদ দিছে🤣\nআরফিন এখন আর hetars চুষে না🥱😈",
        }
        api.sendMessage(msg, threadID, messageID);
    }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}