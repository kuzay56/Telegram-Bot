const locationCommandFunc = async (options) => {

  const { bot, msg } = options;
  const chatId = msg.chat.id;

  const latitudeOfFilarmonia = 51.770253;
  const longitudeOfFilarmonia = 55.112441;
	
  const errorMsg = "Не удалось запустить бота";

  try {
    await bot.sendLocation(chatId, latitudeOfFilarmonia, longitudeOfFilarmonia);
    return bot.sendMessage(
      chatId,
      `460024, г. Оренбург, ул. Маршала Г.К. Жукова, 34`
    );
  } catch (e) {
    return bot.sendMessage(chatId, errorMsg, e);
  }
};

module.exports = locationCommandFunc;
