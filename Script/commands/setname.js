module.exports.config = {
    name: "setname",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐀𝐑𝐅𝐈𝐍 𝐁𝐎𝐒𝐒 𝐄𝐑 𝐁𝐎𝐓 ☠︎︎ ",
    description: "Change the nickname in your group or the person you tag",
    commandCategory: "Box Chat",
    usages: "[name]",
    cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    const name = args.join(" ")
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
    if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}