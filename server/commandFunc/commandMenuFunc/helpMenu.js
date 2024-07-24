const helpCommandFunc = require("../helpCommandFunc");

const helpMenu = async (options) => {
  return helpCommandFunc(options);
};

module.exports = helpMenu;
