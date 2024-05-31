const { menuBot } = require("../components/menu");

const menuCommandFunc = async (options) => {
	
  const { bot, msg } = options;
  const chatId = msg.chat.id;

  const errorMsg = "Не удалось запустить бота";

  try {
    return bot.sendMessage(chatId, `Меню бота`, menuBot);
  } catch (e) {
    return bot.sendMessage(chatId, errorMsg, e);
  }
};

module.exports = menuCommandFunc;
