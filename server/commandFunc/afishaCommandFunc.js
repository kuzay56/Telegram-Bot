const afishaCommandFunc = async (options) => {

  const { bot, msg } = options;
  const chatId = msg.chat.id;

  const afishaUrl = "https://orenfilarmonia.ru/afisha";
	
  const errorMsg = "Не удалось запустить бота";

  try {
    return bot.sendMessage(chatId, "Нажмите на кнопку ниже", {
      reply_markup: {
        inline_keyboard: [[{ text: "Афиша", web_app: { url: afishaUrl } }]],
      },
    });
  } catch (e) {
    return bot.sendMessage(chatId, errorMsg, e);
  }
};

module.exports = afishaCommandFunc;
