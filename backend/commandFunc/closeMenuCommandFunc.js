const closeMenuCommandFunc = async (options) => {

  const { bot, msg } = options;
  const chatId = msg.chat.id;
	
  const errorMsg = "Не удалось запустить бота";

  try {
    return bot.sendMessage(
      chatId,
      "Меню закрыто, чтобы снова открыть его введите команду /menu",
      {
        reply_markup: {
          remove_keyboard: true,
        },
      }
    );
  } catch (e) {
    return bot.sendMessage(chatId, errorMsg, e);
  }
};

module.exports = closeMenuCommandFunc;
