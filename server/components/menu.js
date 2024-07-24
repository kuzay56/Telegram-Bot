const siteFilarmonia = "https://orenfilarmonia.ru/";
const afishaUrl = "https://orenfilarmonia.ru/afisha";

module.exports = {
  menuBot: {
    reply_markup: {
      keyboard: [
        [{ text: "Афиша", web_app: { url: afishaUrl } }],
        [
          { text: "\u{1F4BB} Сайт", web_app: { url: siteFilarmonia } },
          { text: "\u{260E} Контакты" },
        ],
        [{ text: "\u{1F30D} Локация" }, { text: "\u{1F4D6} Все команды" }],
        [{ text: "\u{274C} Закрыть меню" }],
      ],
      resize_keyboard: true,
    },
  },
};
