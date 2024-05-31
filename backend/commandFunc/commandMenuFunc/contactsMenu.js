const contactsCommandFunc = require("../contactsCommandFunc");

const contactsMenu = async (options) => {
  return contactsCommandFunc(options);
};

module.exports = contactsMenu;
