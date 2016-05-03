/* @flow */

// Imports
const {Transform} = require('caterpillar')

/**
Filter the log entires by level.
Extends http://rawgit.com/bevry/caterpillar/master/docs/index.html#Transform
@extends caterpillar.Transform
@example
const logger = require('caterpillar').create()
logger.pipe(require('caterpillar-filter').create()).pipe(process.stdout)
logger.log('info', 'this will be outputted')
logger.log('debug', 'this will be ignored')
logger.setConfig({level: 5})
logger.log('info', 'now even this will be ignored')
logger.log('note', 'but not this')
*/
class Filter extends Transform {

	/**
	Get the initial configuration.
	@returns {Object}
	*/
	getInitialConfig () {
		return {
			level: 6
		}
	}

	/**
	Empty log entries that are not within our level range.
	Convert the message from Logger into JSON, check its level, if it is above our level, discard it.
	@param {string} message
	@returns {?Object}
	*/
	format (message /* :string */) {
		const entry = JSON.parse(message)
		const {level} = this.getConfig()
		return entry.levelNumber > level ? null : entry
	}
}

// Export
module.exports = Filter
