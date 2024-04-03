const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you obtained from BotFather
const bot = new TelegramBot('6932005907:AAGDCGw-6ocznwnbg6n5hFVFo273nT4e-dk', { polling: true });

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Respond to the received message
  bot.sendMessage(chatId, `You said: ${messageText}`);
});
