
module.exports = (it, expect, form) => {
	const Validator = function (data, rules, messages, translator) {
		this.data = data;
		this.rules = rules;
		this.confirm = 'success';
		this.messages = messages;
		this.translator = translator;
		this.errorBag = {
			data: {
				a: ['one', 'two'],
				b: ['three']
			},
		};

		this.errorBag.all = () => this.errorBag.data;
		this.errorBag.list = () => ['one', 'two', 'three'];
	};

	Validator.prototype.validate = function () {
		this.errorBag.data = {
			one: ['a', 'b', 'c', 'd'],
			two: ['e', 'f', 'g', 'h']
		};

		this.errorBag.all = () => this.errorBag.data;
		this.errorBag.list = () => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

		return this;
	};

	Validator.prototype.errors = function () {
		return this.errorBag;
	};

	Validator.prototype.setRules = function (rules) {
		this.rules = rules;

		return this;
	};

	Validator.prototype.setMessages = function (messages) {
		this.messages = messages;

		return this;
	};

	Validator.prototype.setData = function (data) {
		this.data = data;

		return this;
	};

	const validatable = (data = {}, rules = {}, messages = {}, translator = {}) => (new Validator(data, rules, messages, translator));

	it('should "use" validatable instance and be able to "getValidator"', () => {
		let example = form(validatable, { name: 'sam' });

		expect(example.getValidator().data).to.eql({ name: 'sam' });
	});

	it('should "use" validatable instance and confirm it "hasValidator"', () => {
		let example = form(validatable, { name: 'sam' });

		expect(example.hasValidator()).to.eql(true);
	});

	it('should "use" validatable and set "rules"', () => {
		let example = form(validatable, { name: 'sam' }).rules({
			'name': 'required|min:4'
		});

		expect(example.getValidator().rules).to.eql({ 'name': 'required|min:4' });
	});

	it('should "use" validatable and set "messages"', () => {
		let example = form(validatable, { name: 'sam' }).rules({
			'name': 'required|min:4'
		}).messages({
			'name.required': 'name is required',
			'name.min': 'name must not be less than :min characters'
		});

		expect(example.getValidator().messages).to.eql({
			'name.required': 'name is required',
			'name.min': 'name must not be less than :min characters'
		});
	});

	it('should "use" validatable, with ability to "validate" and "getErrors"', () => {
		let example = form(validatable, { name: 'sam' }).rules({
			'name': 'required|min:4'
		}).messages({
			'name.required': 'name is required',
			'name.min': 'name must not be less than :min characters'
		});

		expect(example.validate().getErrors().list()).to.eql([
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
		]);
	});

	it('should "use" validatable, with ability to "setValidator" a new', () => {
		let example = form(validatable, { name: 'sam' }).rules({
			'name': 'required|min:4'
		}).messages({
			'name.required': 'name is required',
			'name.min': 'name must not be less than :min characters'
		});

		example.setValidator({
			'name': 'required',
		}, {
			'name.required': 'Updated Messages'
		}, {
			'phrases': 'cool'
		});

		expect(example.getValidator().rules).to.eql({
			'name': 'required',
		});

		expect(example.getValidator().messages).to.eql({
			'name.required': 'Updated Messages'
		});

		expect(example.getValidator().translator).to.eql({
			'phrases': 'cool'
		});
	});
};
