const { menuBot } = require("../components/menu");
const errorMsg = "Не удалось запустить бота";

const startCommandFunc = async (options) => {
	
  const { bot, msg } = options;
  const chatId = msg.chat.id;

  try {
    await bot.sendMessage(
      chatId,
      `Здравсвуйте, ${msg.from.first_name} ${msg.from.last_name}, добро пожаловать в телеграм канал Оренбургской областной филармонии \u{270C}`
    );
    return setTimeout(() => {
      bot.sendMessage(chatId, "Меню", menuBot);
    }, 1000);
  } catch (e) {
    return bot.sendMessage(chatId, errorMsg, e);
  }
};

module.exports = startCommandFunc;
