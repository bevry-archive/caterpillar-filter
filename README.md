
<!-- TITLE/ -->

# Filter Transform for [Caterpillar](https://github.com/bevry/caterpillar)

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/bevry/caterpillar-filter.png?branch=master)](http://travis-ci.org/bevry/caterpillar-filter "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/caterpillar-filter.png)](https://npmjs.org/package/caterpillar-filter "View this project on NPM")
[![Dependency Status](https://david-dm.org/bevry/caterpillar-filter.png?theme=shields.io)](https://david-dm.org/bevry/caterpillar-filter)
[![Development Dependency Status](https://david-dm.org/bevry/caterpillar-filter/dev-status.png?theme=shields.io)](https://david-dm.org/bevry/caterpillar-filter#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Filter out undesired log levels from your [Caterpillar](https://github.com/bevry/caterpillar) logger stream

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('caterpillar-filter')`
- Install: `npm install --save caterpillar-filter`

### [Browserify](http://browserify.org/)
- Use: `require('caterpillar-filter')`
- Install: `npm install --save caterpillar-filter`
- CDN URL: `//wzrd.in/bundle/caterpillar-filter@2.0.3`

### [Ender](http://ender.jit.su/)
- Use: `require('caterpillar-filter')`
- Install: `ender add caterpillar-filter`

<!-- /INSTALL -->


## Usage

### Example

``` javascript
// Import
var logger = require('caterpillar').createLogger();
var filter = require('caterpillar-filter').createFilter({level:6});  // omit log level entries above 6

// Pipe logger output to filter, then filter output to stdout
logger.pipe(filter).pipe(process.stdout);

// Log
logger.log('info',  'this is the first log entry');   // info is level 6
logger.log('debug', 'this is the second log entry');  // debug is level 7, this will be omitted by our filter
logger.log('info',  'this is the third log entry');   // info is level 6

// Outputs
// {"args":["this is the first log entry"],"date":"2013-04-25T08:48:38.941Z","levelCode":6,"levelName":"info","line":"9","method":"Object.<anonymous>","file":"/Users/balupton/Projects/caterpillar-filter/example.js"}
// {"args":["this is the third log entry"],"date":"2013-04-25T08:48:38.948Z","levelCode":6,"levelName":"info","line":"11","method":"Object.<anonymous>","file":"/Users/balupton/Projects/caterpillar-filter/example.js"}
```

### Filter API, extends [caterpillar.Transform](https://github.com/bevry/caterpillar), which extends [stream.Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform)

``` javascript
new (require('caterpillar-filter').Filter)(config)
```

- Methods
	- `constructor(config?)` create our new filter instance with the config, config is optional
	- `pipe(child)` pipe our stream to the child, also sync our config to it
	- `setConfig(config)` set the configuration and emit the `config` event
	- `getConfig()` get the configuration
	- `format(entry)` format the caterpillar logger entry
- Configuration
	- `level` number, defaults to `6`, anything higher will be omitted
- Events
	- `config(config)` emitted once our configuration has updated


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/caterpillar-filter/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/caterpillar-filter/commits?author=balupton)

[Become a contributor!](https://github.com/bevry/caterpillar-filter/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2012+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
<br/>Copyright &copy; 2011 Benjamin Lupton <b@lupton.cc> (http://balupton.com)

<!-- /LICENSE -->


