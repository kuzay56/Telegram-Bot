const siteCommandFunc = async (options) => {
	
  const { bot, msg } = options;
  const chatId = msg.chat.id;

  const siteFilarmonia = "https://orenfilarmonia.ru/";

  return bot.sendMessage(chatId, "Перейдите по ссылке ниже", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Сайт филармонии", web_app: { url: siteFilarmonia } }],
      ],
    },
  });
};

module.exports = siteCommandFunc;
