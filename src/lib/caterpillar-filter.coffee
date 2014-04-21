# Filter
class Filter extends require('caterpillar').Transform
	config:
		level: 6

	format: (entry) ->
		return null  if entry.levelNumber > @config.level
		return entry

# Export
module.exports = {
	Filter
	createFilter: (args...) ->  new Filter(args...)
}