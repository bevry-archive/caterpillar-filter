# Import
{expect} = require('chai')
joe = require('joe')
{Logger} = require('caterpillar')
{Filter} = require('../../')
{PassThrough} = require('stream')

# Test
joe.describe 'filter', (describe,it) ->

	describe 'transform', (describe,it) ->
		transform = null

		it 'should instantiate correctly', ->
			transform = new Filter()

		it 'should have a default log level of 6', ->
			expect(transform.getConfig().level).to.eql(6)

	describe 'logging', (describe,it) ->
		logger = new Logger()
		transform = new Filter(level:5)
		output = new PassThrough()
		result = []
		output.on 'data', (chunk) ->
			result.push JSON.parse chunk.toString()

		it 'should pipe correctly', ->
			logger.pipe(transform).pipe(output)

		it 'should log messages', ->
			logger.log(5, 'first')
			logger.log(6, 'second')
			logger.log(5, 'third')

		it 'should provide the expected output', (done) ->
			output.on 'end', ->
				expect(result.length).to.eql(2)
				expect(result[0].args[0]).to.eql('first')
				expect(result[1].args[0]).to.eql('third')
				done()
			logger.end()

