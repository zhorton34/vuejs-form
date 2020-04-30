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

Form.prototype.set = require('./methods/set')
Form.prototype.has = require('./methods/has')
Form.prototype.keys = require('./methods/keys')
Form.prototype.only = require('./methods/only')
Form.prototype.wrap = require('./methods/wrap')
Form.prototype.fill = require('./methods/fill')
Form.prototype.input = require('./methods/input')
Form.prototype.hasAny = require('./methods/hasAny')
Form.prototype.filled = require('./methods/filled')
Form.prototype.except = require('./methods/except')
Form.prototype.forget = require('./methods/forget')
Form.prototype.boolean = require('./methods/boolean')
Form.prototype.missing = require('./methods/missing')
Form.prototype.toArray = require('./methods/toArray')

const accessor = require('./helpers/accessor')

const form = input => accessor(new Form(input));

module.exports = form;
module.exports.form = form;
module.exports.Form = Form;
module.exports.default = form;

let example = form({ 
	name: 'zak',
	email: 'zak@cleancode.studio'
})

console.log(example.data.name)

example.name = 'test'
console.log(example.name)