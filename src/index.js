'strict'

function Form(input) {
  	if (input !== undefined && !Array.isArray(input) && typeof input !== 'object') {
    	this.data = [input];
  	} else if (input instanceof this.constructor) {
    	this.data = input.all();
  	} else {
    	this.data = input || {};
  	}
}

Form.prototype.all = require('./methods/all')
Form.prototype.boolean = require('./methods/boolean')
Form.prototype.empty = require('./methods/empty')
Form.prototype.except = require('./methods/except')
Form.prototype.fill = require('./methods/fill')
Form.prototype.filled = require('./methods/filled')
Form.prototype.forget = require('./methods/forget')
Form.prototype.has = require('./methods/has')
Form.prototype.hasAny = require('./methods/hasAny')
Form.prototype.input = require('./methods/input')
Form.prototype.keys = require('./methods/keys')
Form.prototype.missing = require('./methods/missing')
Form.prototype.only = require('./methods/only')
Form.prototype.set = require('./methods/set')
Form.prototype.toArray = require('./methods/toArray')
Form.prototype.wrap = require('./methods/wrap')

const accessor = require('./helpers/accessor')

const form = input => accessor(new Form(input));

module.exports = form;
module.exports.form = form;
module.exports.default = form;

let example = form({ 
	name: 'zak',
	email: 'zak@cleancode.studio'
})

console.log(example.data.name)

example.name = 'test'
console.log(example.name)