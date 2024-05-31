const contactsCommandFunc = async (options) => {

  const { bot, msg } = options;
  const chatId = msg.chat.id;
	
  const errorMsg = "Не удалось запустить бота";

  try {
    return bot.sendMessage(
      chatId,
      `График работы администрации:\nПн.- Пт.: 09.00 - 18.00, перерыв: 13.00 - 14.00;\nВыходной: суббота, воскресенье;\n\nТелефон (приёмная): +7 (3532) 77-30-30;\nФакс: +7 (3532) 72-90-41;\nЕ-mail: orenfil@mail.ru`
    );
  } catch (e) {
    return bot.sendMessage(chatId, errorMsg, e);
  }
};

module.exports = contactsCommandFunc;
