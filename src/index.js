'strict'

function VueForm(input) {
  	if (input !== undefined && !Array.isArray(input) && typeof input !== 'object') {
    	this.data = [input];
  	} else if (input instanceof this.constructor) {
    	this.data = input.all();
  	} else {
    	this.data = input || {};
  	}
}

VueForm.prototype.all = require('./methods/all')
VueForm.prototype.boolean = require('./methods/boolean')
VueForm.prototype.empty = require('./methods/empty')
VueForm.prototype.except = require('./methods/except')
VueForm.prototype.extend = require('./methods/extend')
VueForm.prototype.fill = require('./methods/fill')
VueForm.prototype.filled = require('./methods/filled')
VueForm.prototype.forget = require('./methods/forget')
VueForm.prototype.has = require('./methods/has')
VueForm.prototype.hasAny = require('./methods/hasAny')
VueForm.prototype.input = require('./methods/input')
VueForm.prototype.keys = require('./methods/keys')
VueForm.prototype.make = require('./methods/make')
VueForm.prototype.missing = require('./methods/missing')
VueForm.prototype.only = require('./methods/only')
VueForm.prototype.set = require('./methods/set')
VueForm.prototype.toArray = require('./methods/toArray')
VueForm.prototype.wrap = require('./methods/wrap')

const accessor = require('./helpers/accessor')

const form = input => accessor(new VueForm(input));

module.exports = form;
module.exports.form = form;
module.exports.default = form;
module.exports.VueForm = VueForm;
