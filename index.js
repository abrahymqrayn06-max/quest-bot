const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// استبدل هذا التوكن الخاص بالتوكن الخاص بربط البوت
const TOKEN = 'MTUxNDI2NzE3NzAzOTk1NDAxMQ.Gqe472.gYPbQpQCjEQt2hC2m5tnsKAk7uAZkiMoX8Vw8gMTUxNDI2NzE3NzAzOTk1NDAxMQ.Gqe472.gYPbQpQCjEQt2hC2m5tnsKAk7uAZkiMoX8Vw8g'; 

// عند تشغيل البوت
client.once('ready', () => {
    console.log(`✅ تم تسجيل الدخول كبوت: ${client.user.tag}`);
});

// الاستماع إلى الرسائل
client.on('messageCreate', (message) => {
    if (message.author.bot) return; // تجاهل رسائل البوتات

    // أمر !ping
    if (message.content.toLowerCase() === '!ping') {
        message.reply('🏓 Pong!');
    }

    // أمر !help
    if (message.content.toLowerCase() === '!help') {
        message.reply(`🛠️ **الأوامر المتاحة:**\n!ping - تحقق من استجابة البوت\n!help - عرض هذه الرسالة`);
    }
});

// تسجيل الدخول باستخدام التوكن
client.login(TOKEN);