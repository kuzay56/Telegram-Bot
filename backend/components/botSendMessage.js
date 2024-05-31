const commands = require("./commandsName");

async function botSendMessage(msg, bot) {
  const chatId = msg.chat.id;
  const text = msg.text;

	const commandToCall = commands[text];
	const options = {
		msg,
		bot,
	};
	if (commandToCall) {
		return commandToCall(options);
	}
	return bot.sendMessage(
		chatId,
		"Я тебя не понимаю, попробуй еще раз!) Вот тебе помощь /help"
	);
	
}

module.exports = {
  botSendMessage,
};
