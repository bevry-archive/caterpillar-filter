// Import
const {equal} = require('assert-helpers')
const {suite} = require('joe')
const {Logger} = require('caterpillar')
const Filter = require('../')
const {PassThrough} = require('stream')

// Test
suite('filter', function (suite, test) {

	suite('instantiation', function (suite, test) {
		test('should instantiate correctly', function () {
			const transform = new Filter()
			equal(transform.getConfig().level, 6, 'default level was applied correctly')
		})

		test('should instantiate correctly, via create, with config', function () {
			const transform = Filter.create({level: 5})
			equal(transform.getConfig().level, 5, 'custom level was applied correctly')
		})
	})

	suite('logging', function (suite, test) {
		const logger = new Logger()
		const transform = new Filter({level: 5})
		const output = new PassThrough()
		const result = []

		output.on('data', function (chunk) {
			result.push(JSON.parse(chunk.toString()))
		})

		test('should pipe correctly', function () {
			logger.pipe(transform).pipe(output)
		})

		test('should log messages', function () {
			logger.log(5, 'first')
			logger.log(6, 'second')
			logger.log(5, 'third')
		})

		test('should provide the expected output', function (done) {
			output.on('end', function () {
				equal(result.length, 2)
				equal(result[0].args[0], 'first')
				equal(result[1].args[0], 'third')
				done()
			})
			logger.end()
		})
	})
})
