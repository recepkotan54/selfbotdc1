const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
     member.sendMessage('```md\n# Sunucumuza Hoşgeldin ' + username + ' ! \n# Buraya Yakın arkadaşlarını çağırıp oyunlar oynayıp sohbet edebilirsin!\n# Discord sunucumuza gelmeyi unutma!```\n ** https://discord.gg/Ee7hBtV ** \n\n\n https://cdn.discordapp.com/attachments/469843276954992662/470940729624100884/JPEG_20180723_094842.jpg \n\n ');
};