const helpCommandFunc = async (options) => {

  const { bot, msg } = options;
  const chatId = msg.chat.id;
	
  const errorMsg = "Не удалось запустить бота";

  try {
    return bot.sendMessage(
      chatId,
      `Все доступные мне команды:
		/start,
		/site,
		/menu,
		/afisha,
		/location,
		/contacts,
		/help`
    );
  } catch (e) {
    return bot.sendMessage(chatId, errorMsg, e);
  }
};

module.exports = helpCommandFunc;
