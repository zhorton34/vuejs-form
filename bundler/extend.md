---

## Extend Api

---

Extend and append functionality to just about every single major service this package provides

- [Extend Form Using Macros](#extend-form-using-macros)
- [Extend Validator Using Macros](#extend-validator-using-macros)
- [Extend Error Messages Bag Using Macros](#extend-error-messages-api)
- [Add Custom Error Messages](#extending-custom-error-messages)
- [Create Custom Validation Rule](#extending-custom-rules---single-rule)
- [Create Custom Validation Rules](#extending-custom-rules---multiple-rules)
- [Extend Into Multi Step Form Example](#extend-form-into-multi-step-form-not-tested-but-good-base-to-provide-some-ideas)

#### Extend Form Using Macros
```javascript
const form = require('vuejs-form');

form().macro('shortcut', () => {
    return this.validate().errors().list();
});  

let example = form({ name: '' }).rules({ name: 'required' });

example.shortcut();
// Output: ['Name is a required field'];
```

#### Extend Validator Using Macros
```javascript
const { form, validator } = require('vuejs-form');

validator().macro('translate', ({ dictionary, locale }) => {
    if (!Object.keys(dictionary).includes(locale)) {
    	console.warn(`Translation dictionary does not include passed ${locale}`);

        return this;
    } 
    
    const language = Object.keys(this.messages);
    const dictionary_words = key => Object.keys(dictionary[locale]).includes(key);
    language.filter(dictionary_words).forEach(key => { this.messages[key] = dictionary[`${locale}.${key}`] });

    return this;
});

let example = form({ name: '' }).rules({ name: 'required' });

let locale = 'ru';
let dictionary = { ru: { email: "Эл.почта" } };

example.validator().translate({ locale, dictionary });
```


---

#### Extending Error Messages Api

---

---

##### Error Bag Macro

---
Adds custom method on form error bag instance

```js 
let example = form(data).rules(rules);

let example.errors().macro('count', function () {
    return this.list().length;
});


// example.errors().count() === example.errors().list().length
 ```


---

##### Error Bag ForceMacro

---
Allows you to overwrite pre-defined macro and over write core error message bag functions (Use With Caution)

```js
let example = form({ name: '' }).rules({ name: 'required|min:3' }).validate();

example.errors().get('name'); // Outputs: "Name is a required field"

example.errors().forceMacro('get', function (field) {
    if (this.has(field)) {
        return this.list(field).join(', ') + '.';
    }
});

example.errors().get('name'); // Outputs: "Name is a required field, name must have at least 3 characters."
```  

#### Extending: Custom Error Messages
- This has nothing to do with the error messages Api
- These are the literal string output a rule message will display when it fails
- Here we'll customize error messages for specific rules on any given field

- Globally, each rule provides a default error message
- Easily override rule's default error message
- Simply pass 'messages' to our validator
- Only override messages you want to

```javascript
let data = { name: '', email: '' };

let rules = {
    name: ['min:3', 'max:12', 'string', 'required'],
    email: ['email', 'required']
};

let customMessages = {
    'name.min': 'Whoops! :attribute is less than :min characters',
    'name.required': 'Wha oh, doesnt look like there any value for your :attribute field',

    'email.email': 'Really? Email is called Email...it has to be an email...',
};

form(data).rules(rules).messages(customMessages).validate().errors().all();
```

#### Extending: Custom Rules
> Add Your Own Validation Rules

- Easily add, or override, validation rules
- Add a group of rules at a time
- Add a single rule add a time

#### Extending: Custom Rules - Single Rule
> form().validator().extend(rule_name, [message, rule])`
```js
let example = form({ name: 'timmy' }).rules({ name: 'uppercase' });

example.validator().extend('uppercase', [
    ':attribute must be uppercase',
    ({ value, validator, parameters }) => value === value.toUpperCase(),
]);

// true
example.validate().errors().has('name');

// "Name must be uppercase"
example.errors().get('name');
```

#### Extending: Custom Rules - multiple rules
> `form.validator().extend({ first: [message, rule], second: [message, rule], etc... })`
```js
let example = form({ name: '' }).rules({ name: ['required_with:last_name', 'required' ] });

example.validator().extend({
    uppercase: [
       ':attribute must be uppercase',
        ({ value }) => value === value.toUpperCase(),
    ],
    not_uppercase: [
        ':attribute must not be uppercase',
        ({ value }) => value !== value.toUpperCase()
    ],
    required_without: [
        ':attribute is only required when form is missing :required_without field',
        ({ validator, parameters }) => !Object.keys(validator.data).includes(parameters[0])
    ],
    required_with: [
        ':attribute is required with the :required_with field',
        ({ validator, parameters }) => Object.keys(validator.data).includes(parameters[0])
    ],
});
```

#### Extend Form Into Multi Step Form (Not tested, but good base to provide some ideas)
- Not actually tested outside of these docs, but solid starting point

```html
<template>
    <div class="form-container">
        <small>
            Step {{ multi.steps().currentStep }} of {{ multi.steps().count() }}
        </small>
        
        <!-- Pass form data as props, via vuex, emit event on any data change from all form field children, or if your safe wit it simply reference this.$parent.multi.steps().current from the child field. If you do so, don't plan on using the child component outside of multi-step forms. this.$parent is traditionally bad practice -->
        <component :is="multi.steps().current().getComponent()"></component>
        
        <button class="btn-default" v-if="multi.steps().hasPrev()" @click="multi.steps().prev()">
            Prev
        </button>

        <button class="btn-primary" :disabled='multi.steps().current().errors().any()' v-if="multi.steps().hasNext()" @click="multi.steps().next()">
            Next    
        </button>
        
        <button class="btn-success" :disabled='multi.steps().current().errors().any()' v-if="multi.steps().isLast()" @click="submit">
            Done
        </button>
    </div>
</template>
```

```javascript

const MultiStep = function (form) {
    this.sections = {};
	this.currentStep = 0;

	this.parent = function () {
		return form;
	};
    
    this.current = function () {
        if (this.has(this.currentStep)) {
            return this.get(this.currentStep);
        } else {
            console.error("No current step found");
        }
    };
    
    this.currentComponent = function () {
        return this.current().component_is
    };
    this.count = function () {
        return this.list().length;
    };

    this.travel = function (to) {
        if (this.has(to)) {
            this.currentStep = to;
            
            return this.current();
        } else {
            return console.error(`form step ${to} not found`);
        }
    };
    
    this.prev = function () {
        if (!this.isFirst()) {
            this.currentStep = this.currentStep - 1;
    
            return this.current();
        } else {
            console.error('already on the very first step')
        }
    };

    
    this.next = function () {
        if (!this.isLast()) {
            this.currentStep = this.currentStep + 1;
        
            return this.current();
        } else {
            console.log('last step')
        }
    };

    this.hasPrev = function () {
        return this.has(this.currentStep + 1);
    };
    
    this.hasCurrent = function () {
        return this.has(this.currentStep);
    };
    
    this.isFirst = function () {
        return this.hasCurrent() && !this.hasPrev()
    };
    
    this.isLast = function () {
        return this.hasCurrent() && !this.hasNext();
    };

    this.hasNext = function () {
        return this.has(this.currentStep + 1)
    };

	this.any = function () {
        const isEmpty = value => ([
            value === null || value === '',
            Array.isArray(value) && value.length === 0,
            typeof value === 'object' && Object.keys(value).length === 0
        ].includes(true));
        	
		return !isEmpty(this.list());
	};

	this.has = function (group) {
		return Object.keys(this.sections).includes(group)
			&& this.sections[group].length > 0
	};

	this.all = function () {
		return this.sections;
	};

	this.list = function (group = false) {
		return group
			? this.sections[group]
			: Object.keys(this.sections)
				.map(group => this.sections[group])
				.reduce((list, groups) => [ ...list,  ...groups ], []);
	};

	this.get = function (group) {
		if (this.has(group)) {
			return this.sections[group][0];
		}
	};

	this.add = function(group, item) {
		this.sections[group] = Array.isArray(this.sections[group])
			? this.sections[group]
			: [];

		this.sections[group].push(item);

        return this;
	};

	this.set = function (group, items = []) {
		if (typeof items === 'object') {
			this.sections = items;
		} else {
			this.sections[group] = items;
		}
	};

	this.forget = function (group) {
		if (typeof group === 'undefined') {
			this.sections = {};
		} else {
			this.sections[group] = [];
		}
	};
};


const steppable = function (form = {}) {
	return new MultiStep(validator);
};

form().macro('multiple', () => {
    this.steppables = steppable(this);
    
    this.steps = function () {
        return this.steppables;
    };
    
    this.first = function () {
        return this.steps().get('0')
    }
    
    this.last = function () {
        return this.steps().list(this.steps().count() - 1);
    };
    
    this.current = function () {
        return this.steps().current();
    };

    
    return this;
});

form().multiple().steps();


/** Use macro to extend form and append vue component instance to each form step **/
form().macro('hasComponent', () => typeof this.component_is !== 'undefined');
form().macro('getComponent', () => {
     this.hasComponent() ? this.component_is : `<template><div>No Component Registered On This Form Instance</div></template>`
});

form().macro('is', (vue_instance) => {
    this.component_is = vue_instance;

    return this;
});

form().multiple().steps();

const { name_fields, password_fields, final_step } = require('./components/forms/steps/index.js');

let multi = form({}).multiple();

multi.steps().add(0, 
    form({ 
        last_name: '', 
        first_name: '' 
    })
    .rules({
        last_name: ['required', 'min:3', 'string', 'different:first_name'],
        first_name: ['required', 'min:3', 'string', 'different:last_name']
    })
    .messages({
        'last_name.required': 'Last name is required',
        'last_name.min': 'Last name may not be less than :min characters',
        'last_name.different': 'Last Name must be different than first name',
        'last_name.string': 'Last Name must be a string',
        'first_name.required': 'First name is required',
        'first_name.min': 'First name may not be less than :min characters',
        'first_name.different': 'Last Name must be different than last name',
        'first_name.string': 'First name must be of the string type'
    })
    .is(name_fields)
);

multi.steps().add(1,
    form({ 
        password: '',
        password_confirmation: '',
    })
    .rules({ 
        password: ['required', 'min:5', 'string', 'confirmed'],
    })
    .is(password_fields)
);

multi.steps().add(2,
    form({ terms_of_service: '' })
    .rules({ terms_of_service: 'accepted|required' })
    .messages({
        'terms_of_service.accepted': "Must accept terms of service before moving on",
        'terms_of_service.required': "Must accept terms of service before submitting form",
    })
    .is(final_step)
);


export default {
    name: 'multi-step-form',
    data: () => ({ multi }),

    methods: {
        submit() {
            let data = this.multi.steps().list().reduce((data, step) => ({ ...data, ...step.all() }), {});
        
            console.log('all data: ', form(data).all());
        }
    }
};
```
