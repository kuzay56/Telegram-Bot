const afishaCommandFunc = require('../commandFunc/afishaCommandFunc')
const closeMenuCommandFunc = require('../commandFunc/closeMenuCommandFunc')
const contactsMenu = require('../commandFunc/commandMenuFunc/contactsMenu')
const helpMenu = require('../commandFunc/commandMenuFunc/helpMenu')
const locationMenu = require('../commandFunc/commandMenuFunc/locationMenu')
const contactsCommandFunc = require('../commandFunc/contactsCommandFunc')
const helpCommandFunc = require('../commandFunc/helpCommandFunc')
const locationCommandFunc = require('../commandFunc/locationCommandFunc')
const menuCommandFunc = require('../commandFunc/menuCommandFunc')
const siteCommandFunc = require('../commandFunc/siteCommandFunc')
const startCommandFunc = require('../commandFunc/startCommandFunc')

const {
	START_COMMAND,
	MENU_COMMAND,
	CLOSE_COMMAND,
	SITE_COMMAND,
	AFISHA_COMMAND,
	LOCATION_COMMAND,
	CONTACTS_COMMAND,
	HELP_COMMAND,
	CONTACTS_MENU_COMMAND,
	HELP_MENU_COMMAND,
	LOCATION_MENU_COMMAND,
} = require('../config/constName')

const commands = {
	[START_COMMAND]: startCommandFunc,
	[SITE_COMMAND]: siteCommandFunc,
	[MENU_COMMAND]: menuCommandFunc,
	[AFISHA_COMMAND]: afishaCommandFunc,
	[LOCATION_COMMAND]: locationCommandFunc,
	[CONTACTS_COMMAND]: contactsCommandFunc,
	[HELP_COMMAND]: helpCommandFunc,
	[CLOSE_COMMAND]: closeMenuCommandFunc,
	[CONTACTS_MENU_COMMAND]: contactsMenu,
	[HELP_MENU_COMMAND]: helpMenu,
	[LOCATION_MENU_COMMAND]: locationMenu,
}

module.exports = commands
