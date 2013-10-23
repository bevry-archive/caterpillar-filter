# Filter
class Filter extends require('caterpillar').Transform
	config:
		level: 6

	_transform: (chunk, encoding, next) =>
		entry = JSON.parse(chunk.toString())
		message = @format(entry)
		message = JSON.stringify(message)  if message
		return next(null, message)

	format: (entry) ->
		return null  if entry.levelNumber > @config.level
		return entry

# Export
module.exports = {
	Filter
	createFilter: (args...) ->  new Filter(args...)
}