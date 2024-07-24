const TelegramBot = require("node-telegram-bot-api");
const sequelize = require("./db");
const { myCommands } = require("./components/myCommands");
const { botSendMessage } = require("./components/botSendMessage");
const config = require("config");
const filbase = config.get("filarmonia_db");

const token = filbase.token;
const bot = new TelegramBot(token, { polling: true });

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Подключение установлено");
  } catch (e) {
    console.log("Подключение сломалось", e);
  }

  bot.setMyCommands(myCommands);
  bot.on("message", (msg) => botSendMessage(msg, bot));
};

start();
