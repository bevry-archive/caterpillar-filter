// Imports
import { Transform, LogEntry } from 'caterpillar'

/**
 * Filter the log entires by level.
 * @extends Transform
 * @example
 * ``` javascript
 * import Logger from 'caterpillar'
 * import Filter from 'caterpillar-filter'
 * const logger = new Logger()
 * const filter = new Filter()
 * logger.pipe(Filter.pipe(process.stdout)
 * logger.log('info', 'this will be outputted')
 * logger.log('debug', 'this will be ignored')
 * logger.setConfig({level: 5})
 * logger.log('info', 'now even this will be ignored')
 * logger.log('note', 'but not this')
 * ```
 */
export class Filter extends Transform {
	/**
	 * Get the initial configuration.
	 */
	getInitialConfig() {
		return {
			level: 6,
		}
	}

	/**
	 * Empty log entries that are not within our level range.
	 * Convert the message from Logger into JSON, check its level, if it is above our level, discard it.
	 * @param message
	 */
	format(message: string): LogEntry {
		const entry = JSON.parse(message)
		const { level } = this.getConfig()
		return entry.levelNumber > level ? null : entry
	}
}

// Aliases
export const create = Filter.create.bind(Filter)
export default Filter
