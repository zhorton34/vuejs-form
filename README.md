[![Travis](https://img.shields.io/travis/zhorton34/vuejs-form/master.svg?style=flat-square)](https://travis-ci.org/zhorton34/vuejs-form/builds)
[![npm downloads](https://img.shields.io/npm/dm/vuejs-form.svg?style=flat-square)](http://badge.fury.io/js/vuejs-form)
[![npm license](https://img.shields.io/npm/l/vuejs-form.svg?style=flat-square)](http://badge.fury.io/js/vuejs-form)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://github.com/zhorton34/vuejs-form/blob/master/package.json)
[![npm version](https://img.shields.io/npm/v/vuejs-form.svg?style=flat-square)](http://badge.fury.io/js/vuejs-form)
[![HitCount](http://hits.dwyl.com/zhorton34/vuejs-form.svg)](http://hits.dwyl.com/zhorton34/vuejs-form)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)


## <img src='https://api.github.com/images/icons/emoji/coffee.png' height='50' width='50' alt="waving that vuejs form introduction & purpose title"/> That Vue Form 

![Vue Form AKA Vuejs Form Mission Statement For Building Vue Validation & Javascript Validated Forms](https://github.com/zhorton34/vuejs-form/raw/master/bundler/vuejs-form-purpose-statement.png "Vue JS Form Package Purpose Journal Text")










---

## <img src='https://api.github.com/images/icons/emoji/point_down.png' height="50" width='50' alt='coffee icon vuejs form installation title'/> Installation



### NPM

```bash
npm install --save-dev vuejs-form
```

### Yarn

```bash
yarn add vuejs-form --save
```

### CDN

```bash
<script src='https://unpkg.com/vuejs-form@latest/build/vuejs-form.min.js'></script>
```

---

## <img src='https://api.github.com/images/icons/emoji/coffee.png' height="50" width='50' /> Four Official Apis

---

- [Form Api](#form-api)
- [Rules Api](#rules-api)
- [Validator Api](#validator-api)
- [Error Messages Api](#error-messages-api)


---

## Playground Examples
Curious, but not 100% on whether this is what you're looking for?
Try vuejs-form out for yourself before installing -- here's some live examples ready for you to tinker away at! 

---
- [Example One (Validate Form On Each User Submit)](https://codepen.io/zhorton34/pen/zYvWZYz)
- [Example One (Validate Form On Each User Update)](https://codepen.io/zhorton34/pen/xxwaYez)
---

## Simple Vue Example

---
```html
<template>
    <div>        
        <input type='email' v-model='form.email' placeholder="Email"/>
        <span v-if="form.errors().has('email')">
            {{ form.errors().get('email') }}
        </span>

        <input type='password' v-model='form.password' placeholder="Password"/>
        <span v-if="form.errors().has('password')">
            {{ form.errors().get('password') }}
        </span>

        <input type='password' v-model='form.password_confirmation' placeholder="Confirm Password"/> 

        <button :disabled='form.empty()' @click='submit'>Submit</button>
    </div>
</template>
```
```js
import form from 'vuejs-form'

export default {
    data: () => ({
        form: form({
            email: '', 
            password: '', 
            password_confirmation: '' 
        })
        .rules({
            email: 'email|min:5|required',
            password: 'required|min:5|confirmed'
        })
        .messages({
            'email.email': 'Email field must be an email (durr)',
            'password.confirmed': 'Whoops, :attribute value does not match :confirmed value',
        }),
   }),

    methods: {
        submit() {
            if (this.form.validate().errors().any()) return;
            
            alert('Success, form is validated!');

            console.log('form all(): ', this.form.all());
            console.log('form except(): ', this.form.except('password_confirmation'));
        },
    }
}
```

---

## Vue Example Two

---


---

## Form API

---

- [all](#all)
- [boolean](#boolean)
- [empty](#empty)
- [except](#except)
- [fill](#fill)
- [filled](#filled)
- [forget](#forget)
- [has](#has)
- [hasAny](#hasany)
- [input](#input)
- [keys](#keys)
- [make](#make)
- [missing](#missing)
- [only](#only)
- [set](#set)
- [toArray](#toarray)
- [wrap](#wrap)
- **Extending Form Api**
- [macro](#macros)
- [localMacro](#macros)
- [forceMacro](#macros)
- [forceLocalMacro](#macros)

---

## Error Messages Api

---

- [form.errors().any()](#any-errors)
- [form.errors().all()](#all-errors)
- [form.errors().list()](#list-errors)
- [form.errors().set(errors)](#set-errors)
- [form.errors().forget()](#forget-errors)
- [form.errors().has(field)](#has-error)
- [form.errors().get(field)](#get-error)
- [form.errors().list(field)](#list-error)
- [form.errors().add(field, message)](#add-error)
- [form.errors().set(field, messages)](#set-field-errors)
- [form.errors().forget(field)](#forget-field)
- [form.errors().getValidator()](#get-errors-validator)
- **Extending Errors Api**
- [form.errors().macro(name, fn)](#macros)
- [form.errors().forceMacro(name, fn)](#macros)
- [form.errors().localMacro(name, fn)](#macros)
- [form.errors().forceLocalMacro(name, fn)](#macros)


---

## Validator Api

---

- [form.rules({...})](#form-register-rules)
- [form.messages({...})](#form-customize-error-messages)
- [form.hasValidator()](#form-has-validator)
- [form.setValidator({...})](#form-set-rules)
- [form.validator()](#form-validator-instance)
- [form.validate()](#validate-form-data)
- **Validator Hooks (Documentation Stored in Vuejs Validators Repository)**
- [form.validator().before(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().after(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().passed(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().failed(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().validateWithoutHooks() (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- **Extend Validator Api**
- [form.validator().macro(name, fn)](#macros)
- [form.validator().forceMacro(name, fn)](#macros)
- [form.validator().localMacro(name, fn)](#macros)
- [form.validator().forceLocalMacro(name, fn)](#macros)

---

## Rules Api

---
- [accepted](#accepted-rule)
- [alpha](#alpha-rule)
- [alpha_dash](#alpha_dash-rule)
- [alpha_num](#alpha_num-rule)
- [array](#array-rule)
- [between](#between-rule)
- [boolean](#boolean-rule)
- [confirmed](#confirmed-rule)
- [date](#date-rule)
- [date_equals](#date-equals-rule)
- [before (date)](#before-rule)
- [before_or_equal (date)](#before-or-equal-rule)
- [after (date)](#after-rule)
- [after_or_equal (date)](#after-or-equal-rule)
- [greater_than (numeric)](#greater-than-rule)
- [gte (Greater than or equal numeric)](#gte-rule)
- [less_than (numeric)](#less-then-rule)
- [lte (Less than or equal numeric)](#lte-rule)
- [different](#different-rule)
- [digits](#digits-rule)
- [digits_between](#digits_between-rule)
- [distinct](#distinct-rule)
- [email](#email-rule)
- [ends_with](#ends_with-rule)
- [integer](#integer-rule)
- [ip](#ip-rule)
- [ipv4](#ipv4-rule)
- [ipv6](#ipv6-rule)
- [json](#json-rule)
- [max](#max-rule)
- [min](#min-rule)
- [not_regex](#not_regex-rule)
- [not_within](#not_within-rule)
- [number](#number-rule)
- [numeric](#numeric-rule)
- [phone](#phone-rule)
- [regex](#regex-rule)
- [required](#required-rule)
- [same](#same-rule)
- [starts_with](#starts_with-rule)
- [string](#string-rule)
- [url](#url-rule)
- [within](#within-rule)




---

## Quick Vue Example

---

```html
<template>
    <div>
        <div v-if="form.errors().any()" v-for="(message, key) in form.errors().list()" :key="`${key}.error`">
            {{ message }}
        </div>

        <input type='text' v-model='form.name' /> <br>
        <input type='email' v-model='form.email' /> <br>
        <input type='password' v-model='form.password' /> <br>
        <input type='password' v-model='form.confirm_password' /> <br>
        <hr>
        <button :disabled='form.empty()' @click='submit'>
            Complete
        </button>
    </div>
</template>
```
```js
import form from 'vuejs-form'

export default {
    data: () => ({
        form: form({
            email: '',
            password: '',
            confirm_password: ''
        })
        .rules({
            email: 'email|min:5|required',
            password: 'same:confirm_password',
            confirm_password: 'min:6|required',
        })
        .messages({
            'email.required': ':attribute is required',
            'email.email': ':attribute must be a valid email',
            'email.min': ':attribute may not have less than :min characters',
            'password.same': 'Whoops, :attribute does not match the :same field',
        }),
   }),

   watch: {
       /*--------------------------------------------------------------
        * When Should Your Form "Validate", Providing Error Messages?
        *--------------------------------------------------------------
        * Form validates every time form data is updated. To
        * display errors on form submit, remove watcher &
        * move "this.form.validate()" over to submit()
        *--------------------------------------------------------------
        */
        ['form.data']: {
            deep: true,
            immediate: false,
            handler: (now, old) => { this.form.validate(); },
        }
   },

    methods: {
        failed() {
            console.log('errors: ', this.form.errors().all());
        },
        passed() {
            console.log('data: ', this.form.all());
            console.log('wrapped data: ', this.form.wrap('data'));
        },
        submit() {
            return this.form.errors().any() ? this.failed() : this.passed();
        },
    }
}
```


---

## Validator Api

---

- [form.rules({...})](#form-register-rules)
- [form.messages({...})](#form-customize-error-messages)
- [form.validator(...)](#form-validator-instance)
- [form.validate(...)](#validate-form-data)
- [form.hasValidator()](#form-has-validator)
- [form.setValidator({...})](#form-set-rules)

### Form Register Rules
> [@SeeAvailableValidationRules](#rules-api)  
```js 
form(data).rules({
    name: 'required|min:4',
    link: 'required|url',
    category: 'required|within:blue,reg,green'
});
```

>
> Optionally Use Arrays Syntax Instead Of Pipes
>

```js 
form(data).rules({
    name: ['required', 'min:4'],
    link: ['required', 'url'],
    category: ['required', 'within:blue,reg,green']
});
```

### Form Customize Error Messages
- All rules have global default error messages shown when rule fails validation.
- Optionally, you are able to override the global defaults rule messages
- Simply use the form(data).rules(set)`.messages({ '{field}.{rule}': 'custom message for failing rule on field' });`
```js
let data = { email: ['required', 'email'] }
form({ email: 'chad'}).rules({
    email: ['required', 'email']
})
.messages({
    'email.required': 'Email field is called email, needa make it an email (Hence Email Field Name, dont worry ~ we added validation just in case you forgot to make the email field an email)'
})
```
### Form Validator Instance
- Get [Validator Instance](https://github.com/zhorton34/vuejs-validators.js)
```js
form(data).rules(options).messages(customMessages);

// form.validator().addMessage(field, error)
// form.validator().addRule(field, rules) 
// etc...
```

### Validate Form Data
- Check current form data against associated form rules
- IMPORTANT: form MUST call validate() method before retrieving current errors

<u>_COMMON GOTCHA!!!!_</u>
- This wont get the current form errors
- The `form.validate()` method was Never called
```js 
let data = { name: '' };
let rules = { name: 'required' };

form(data).rules(rules).errors().list();

// --------------------------------------------
// Form SHOULD fail, but errors list is empty
// --------------------------------------------
// Output: []
// --------------------------------------------
```

> _What's the reason?_ 
>
> Retrieving errors before validating form data  
> 
> would retrieve our error messages Api instance, 
> but it hasn't been filled with our forms error messages.
>
> form.validate() compares form data against form rules, populating our form errors with failing rule messages.
>

**Validate THEN resolve the errors (Using forms fluent api)**
```js 
let data = { name: '' };
let rules = { name: 'required' };

form(data).rules(rules).validate().errors().list();
// Output: ['Name field is required']

// Again, we'll need to validate before retrieving our 
// errors to validate that the values passes our given rules
form.name = 'hello world';

form.errors().list();
// Output: ['Name field is required']

form.validate().errors().list();
// Output: []; 
```
>
>
> Fluently call validate() before calling errors() is simple and to the point. 
>
> At first, this may seem like a tedious extra step. Many may wonder why we don't simply auto-validate the data?

Reason for `form.validate().errors()` Instead of simply `form.errors()` triggering the validation.
  - Reactive frameworks may use `errors()` and the associated Error Messages Api ([@See Form Error Messages Api](#form-error-messages-api))
  - Without providing the option for the end developer to determine when the form validates
  - Async requests, only validate once we've resolved some given data
  - Immediate display of errors (Not always wanted)
  - Option Open To Immediately show error messages ([@See Vue Watcher Example](#vue-example-two))
  - Some other developers may only want to validate data on form submission
  - Many validation rules can be abstracted using the form Api to simply disable the ability to submit a button
  - EX: `<button :disabled='form.empty()' @click='submit'> Done </button>`
  - Then within `submit() method` simply run `if (this.form.validate().errors().any()) return;`
  - That allows the option to set up vuejs-form more like a traditional Form, and avoid many complexities that come along with maintaining the status of our reactive state
  - etc...
  
### Form Has Validator
Determine if form has a validator instance attached to it
```js 
form.hasValidator(); // true or false
```

### Form Set Validator
- Set Validator Instance
- Optionally import the validator instance itself, and extend 
  its functionality validator().macro(add_method, method).
- Then use form macros to track the current step form.macro(add_method, method).
- vuejs-validators.js Also has validator life cycle hooks documented that are available here, but only documented within vuejs-form.js. Very helpful for multi-step forms

```js
const { form, validator } = require('vuejs-form');


form().macro('setSwitchableValidators', (first, second) => {
    this.toggleValidators = 
    this.toggleBetween = first
});

```  
## Rules Api
- [accepted](#accepted-rule)
- [date](#date-rule)
- [date_equals](#date-equals-rule)
- [before (date)](#before-rule)
- [before_or_equal (date)](#before-or-equal-rule)
- [after (date)](#after-rule)
- [after_or_equal (date)](#after-or-equal-rule)
- [greater_than (numeric)](#greater-than-rule)
- [gte (Greater than or equal numeric)](#gte-rule)
- [less_than (numeric)](#less-then-rule)
- [lte (Less than or equal numeric)](#lte-rule)
- [alpha](#alpha-rule)
- [alpha_dash](#alpha_dash-rule)
- [alpha_num](#alpha_num-rule)
- [array](#array-rule)
- [between](#between-rule)
- [boolean](#boolean-rule)
- [confirmed](#confirmed-rule)
- [different](#different-rule)
- [digits](#digits-rule)
- [digits_between](#digits_between-rule)
- [distinct](#distinct-rule)
- [email](#email-rule)
- [ends_with](#ends_with-rule)
- [integer](#integer-rule)
- [ip](#ip-rule)
- [ipv4](#ipv4-rule)
- [ipv6](#ipv6-rule)
- [json](#json-rule)
- [max](#max-rule)
- [min](#min-rule)
- [not_regex](#not_regex-rule)
- [not_within](#not_within-rule)
- [number](#number-rule)
- [numeric](#numeric-rule)
- [phone](#phone-rule)
- [regex](#regex-rule)
- [required](#required-rule)
- [same](#same-rule)
- [starts_with](#starts_with-rule)
- [string](#string-rule)
- [url](#url-rule)
- [within](#within-rule)



### Date Equals Rule
(Date)
The field under validation must be the same date as the rules date

> Passes Date Equals Rule
```js
let form = { 
    one: '4-22-1997',
    two: 'April 22 2025' 
}

let rules = {
  one: 'date_equals:4-22-1997',
  two: 'date_equals:April 22 2025',
}
```

> Fails Date Equals Rule
```js
let form = { 
    one: '4-22-1997',
    two: '2-12-1997' 
}

let rules = {
  one: 'date_equals:4-24-1998',
  two: 'date_equals:1-11-1996',
}
```

### Before Rule
(Date)

The Field under evaluation must be before the compared date

> Passes Before (Date) Rule
```
let form = { 
    one: '4-22-1997', 
    two: '2-12-1997' 
}

let rules = {
  one: 'before:4-22-1998',
  two: 'before:2-12-1997',
}
```

> Fails Before (Date) Rule
```js
let form = { 
    one: '4-22-1997', 
    two: '3-12-1997' 
}

let rules = {
  one: 'before:4-22-1997',
  two: 'before:2-3-1996',
}
```

### Before Or Equal Rule
(Date)
The field under validation must be before or equal to the compared date.

> Passes Before Or Equal (Date) Rule
```js
let form = { 
    one: '4-22-1997', 
    two: '2-12-1997' 
}

let rules = {
  one: 'before_or_equal:3-21-1998',
  two: 'before_or_equal:2-12-1997',
}
```

> Fails Before Or Equal (Date) Rule
```js
let form = { 
    one: '4-22-1997', 
    two: '2-3-1997' 
}

let rules = {
  one: 'before_or_equal:4-23-1997',
  two: 'before_or_equal:2-3-1996',
}
```

### After Rule
(Date)

The Field under evaluation must be after the compared date

> Passes After (Date) Rule
```js
let form = { 
    one: '4-22-1997', 
    two: '2-2-1997' 
}

let rules = {
  one: 'after:4-23-1997',
  two: 'after:2-3-1996',
}
```

### Date Rule
(Date)
The field under validation must be a valid, non-relative date according to the new Date js constructor.

> Passes Date Rule
- 4.22.1997 
- 4-22-1997
- 4/22/1997
- April 22 1997
- Tuesday April 22 1997

> Fails Date Rule
- asdfweadf
- 23423423
- []

> Fails After (Date) Rule
```js
let form = { 
    one: '4-22-1997', 
    two: '2-12-1997' 
}

let rules = {
  one: 'after:4-22-1998',
  two: 'after:1-11-1996',
}
```


### After Or Equal Rule
(Date)
The field under validation must be after or equal to the compared date.

> Passes After Or Equal (Date) Rule
```js
let form = { 
    one: '4-22-1997',
    two: '1-11-2013', 
}

let rules = {
  one: 'after_or_equal:4-22-1997',
  two: 'after_or_equal:2-12-2014',
}
```

> Fails After Or Equal (Date) Rule
```js
let form = { 
    one: '4-22-1997',
    two: '2-12-1997' 
}

let rules = {
  one: 'after_or_equal:4-23-1997',
  two: 'after_or_equal:2-3-1996',
}
```


### Accepted Rule

The field under form must be yes, on, 1, or true. This is useful for validating "Terms of Service" acceptance.

> Passing Accepted Rule
```js
let data = { terms_of_service: 'no' };
let rules = { terms_of_service: 'accepted' };

// false
form(data).rules(rules).validate().errors().has('terms_of_service');
```

> Failing Accepted Rule
```js
let data = { terms_of_service: null }
let rules = { terms_of_service: 'accepted' }

// true
form(data).rules(rules).validate().errors().has('terms_of_services');
```


### Alpha Rule
The field under form must be entirely alphabetic characters.

> Passing Alpha Rule
```js
let data = { letters: 'asdeddadfjkkdjfasdf' };
let rules = { letters: ['alpha'] };

// false
form(data).rules(rules).validate().errors().has('letters');
```

> Failing Alpha Rule
```js
let data = { letters: '5-@'}
let rules = { letters: ['alpha'] }

// true
form(data).rules(rules).validate().errors().has('letters');
```

### Alpha Dash Rule
The field under form may have alpha-numeric characters, as well as dashes and underscores.

> Passing Alpha Dash Rule

```js
let data = { slug: 'user_name' };
let rules = { slug: ['alpha_dash'] };

// false
form(data).rules(rules).validate().errors().has('slug');
```

> Failing Alpha Dash Rule
```js
let data = { words: 'hello world'}
let rules = { words: ['alpha_dash'] }

// true
form(data).rules(rules).validate().errors().has('words');
```

### Alpha Num Rule
The field under form must be entirely alpha-numeric characters.

> Passing Alpha Num Rule

```js
let data = { key: '4asdasdfe4d23545w634adf' };
let rules = { key: ['alpha_num'] };

// false
form(data).rules(rules).validate().errors().any();
```

> Failing Alpha Num Rule
```js
let data = { identifier: '1-asdf4adf_d_42'}
let rules = { identifier: ['alpha_num'] }

// true
form(data).rules(rules).validate().errors().any();
```

### Array Rule
The field under form must be a JS array.

> Passing Array Rule
```js
let data = { list: ['banana', 'broccoli', 'carrot'] };
let rules = { list: 'array' };

// false 
form(data).rules(rules).validate().errors().any();
```

> Failing Array Rule
```js
let data = { options: { name: 'hey world' } }
let rules = { options: 'array' }

// true
form(data).rules(rules).validate().errors().any();
```


### Email Rule
The given field value must be an email

> Passing Email Rule
```js
let data = { email: 'example@cleancode.studio' };
let rules = { email: ['email'] };

// false
form(data).rules(rules).validate().errors().any();
```

> Failing Email Rule
```js
let data = { email: 'asdfsdaf@.net'}
let rules = { email: ['email'] }

// true
form(data).rules(rules).validate().errors().any();
```


### Boolean Rule
- Boolish form, not strict boolean check 
- Validates that field value is "truthy" or "falsy"

|**Truthy**|**Falsy**|
|---|---|
|1|0|
|"1"|"0"|
|"on"|"off"|
|"On"|"No"|
|"ON"|"OFF"|
|"yes"|"no"|
|"Yes"|"Off"|
|"YES"|"NO"|
|true|false|
|"true"|"false"|
|"True"|"False"|
|"TRUE"|"FALSE"|

> Passing Boolean Rule
```js
let data = { selected: 'Yes' };
let rules = { selected: ['boolean'] };

// false
form(data).rules(rules).validate().errors().any();
```

> Failing Boolean Rule
```js
form = { selected: null };
rules = { selected: ['boolean'] };

// true
form(data).rules(rules).validate().errors().any();
```


### Confirmed form Rule
- `{field}` value must match `{field}_confirmation` value
- Example `password` must match `password_confirmation` value to pass `confirmed` ruled
> Passing Confirmed Rule
```js bash
let data = { password: 'secret', password_confirmation: 'secret' }
let rules = { password: 'confirmed' }

// false
form(data).rules(rules).validate().errors().any();
```

> Failing Confirmed Rule
```js bash
let data = { password: 'secret' };
let rules = { password: 'confirmed' };

// true
form(data).rules(rules).validate().errors().any();
form.password_confirmation = 'something_something';

// true
form.validate().errors().any();
```

> Passing Confirmed Rule Again
```js bash 
form.password_confirmation = 'secret';

// false
form.validate().errors().any();
```

### Greater Than Rule
(Numeric)

Number must be greater than compared value

> Passing greater than rule
```js

let form = {
    age: 24,
    members: 19,
    percentage: 0.4,
};

let rules = {
    age: 'greater_than:13',
    members: 'greater_than:10',
    percentage: 'greater_than:0.35',
};
```

> Failing greater than rule
```js
 let form = {
     age: 24,
     members: 19,
     percentage: 0.4,
 };
 
 let rules = {
     age: 'greater_than:24',
     members: 'greater_than:100',
     percentage: 'greater_than:0.9',
 };
```

### Gte Rule
(Greater Than Or Equal - Numeric)
Number must be greater than or equal to compared value

> Passing greater than or equal rule (gte)
```js

let form = {
    age: 24,
    members: 19,
    percentage: 0.4,
};

let rules = {
    age: 'gte:24',
    members: 'gte:10',
    percentage: 'gte:0.35',
};
```

> Failing greater than or equal rule (gte)
```js
 
 let form = {
     age: 24,
     members: 19,
     percentage: 0.4,
 };
 
 let rules = {
     age: 'greater_than:25',
     members: 'greater_than:100',
     percentage: 'greater_than:0.9',
 };
```

### Less Than Rule
(Numeric)

Number must be less than compared value

> Passing less than rule
```js

let form = {
    age: 24,
    members: 19,
    percentage: 0.4,
} ;

let rules = {
    age: 'less_than:25',
    members: 'less_than:20',
    percentage: 'less_than:0.8',
}
```

> Failing less than rule
```js
 let form = {
     age: 24,
     members: 19,
     percentage: 0.4,
 };
 
 let rules = {
     age: 'less_than:24',
     members: 'less_than:10',
     percentage: 'less_than:0.1',
 }
```


### Lte Rule
(Less than or equal - Numeric)

Number must be less than or equal to compared value

> Passing Less than or equal (lte) rule
```js

let form = {
    age: 24,
    members: 19,
    percentage: 0.4,
} ;

let rules = {
    age: 'lte:24',
    members: 'lte:20',
    percentage: 'lte:0.8',
}
```

> Failing less than or equal (lte) rule
```js
 let form = {
     age: 24,
     members: 19,
     percentage: 0.4,
 };
 
 let rules = {
     age: 'less_than:24',
     members: 'less_than:10',
     percentage: 'less_than:0.5',
 }
```

### Different form Rule
The given field value is different than another field value

> Passing Different Rule
```js bash
let data = { password: 'asdfasdfasdf', confirm_password: 'secret' };
let rules = { password: 'different:confirm_password' };

form(data).rules(rules).validate().errors().any();
```

> Failing Different Rule
```js bash
let data = { password: 'secret', confirm_password: 'secret' }
let rules = { password: 'different:confirm_password' }

form(data).rules(rules).validate().errors().any();
```


### Digits Rule
The field under form must be numeric and must have an exact length of value.

> Passing Digits Rule
```js
let data = { amount: '10000' }
let rules = { amount: 'digits:6' }

form(data).rules(rules).validate().errors().any();
```

> Failing Digits Rule
```js
let data = { amount: '10000' }
let rules = { amount: 'digits:4' }

form(data).rules(rules).validate().errors().any();
```

### Digits Between Rule
The field under form must be numeric and have a length between the lower and upper limit defined.

> Passing Digits Between Rule
```js
let data = { amount: '10000' }
let rules = { amount: 'digits_between:4,6' }

form(data).rules(rules).validate().errors().any();
```

> Failing Digits Between Rule
```js
let data = { amount: '10000' }
let rules = { amount: 'digits_between:3,5' }

form(data).rules(rules).validate().errors().any();
```

### Distinct Rule
The field under form must be an array with no duplicate values.

> Passing Distinct Rule
```js
let data = { shopping_list: ['ham', 'eggs', 'milk', 'turkey'] }
let rules = { shopping_list: 'distinct' }

form(data).rules(rules).validate().errors().any();
```

> Failing Distinct Rule
```js

let data = { shopping_list: ['ham', 'ham', 'eggs', 'milk', 'turkey'] }
let rules = { shopping_list: 'distinct' }

form(data).rules(rules).validate().errors().any();
```

### Email Rule
The given field value must be an email

> Passing Email Rule
```js
let data = { email: 'example@cleancode.studio' };
let rules = { email: ['email'] };

form(data).rules(rules).validate().errors().any();
```

> Failing Email Rule
```js
let data = { email: 'asdfsdaf@.net'}
let rules = { email: ['email'] }

form(data).rules(rules).validate().errors().any();
```

### Ends With Rule
The field under form must end with one of the given values.

> Passing Ends With Rule
```js
let data = { name: 'sammie' };
let rules = { name: 'ends_with:sl,ie,asx' };

form(data).rules(rules).validate().errors().any();
```

> Failing Ends With Rule
```js
let data = { name: 5 };
let rules = { name: 'ends_with:sl,ie,asx' };

form(data).rules(rules).validate().errors().any();

form.setData({ name: 'azure' }).setRules({ name: 'ends_with:sl,ie,asx' })
    
form.validate().errors().any();
```


### Integer Rule
This form rule does not verify that the input is of the "integer" variable type, only that the input is a string or numeric value that contains an integer.

> Passing Integer Rule
```js
let data = { students: 25 }
let rules = { students: ['integer'] }

form(data).rules(rules).validate().errors().any();
```

> Failing Integer Rule
```js
let data = { students: 'yes' }
let rules = { students: ['integer'] }

form(data).rules(rules).validate().errors().any();
```

### IP Rule
This form rule confirms that value is an IP address.

> Passing IP Rule
- "115.42.150.37"
- "192.168.0.1"
- "110.234.52.124"
- "2001:0db8:85a3:0000:0000:8a2e:0370:7334" (Ipv6)

> Failing IP Rule
- "210.110" – must have 4 octets
- "255" – must have 4 octets
- "y.y.y.y" – the only digit has allowed
- "255.0.0.y" – the only digit has allowed
- "666.10.10.20" – digit must between [0-255]
- "4444.11.11.11" – digit must between [0-255]
- "33.3333.33.3" – digit must between [0-255]


### IPv4 Rule
This form rule confirms that value is an IPv4 address.

> Passing IPv4 Rule
- "115.42.150.37"
- "192.168.0.1"
- "110.234.52.124"

> Failing IPv4 Rule
- "210.110" – must have 4 octets
- "255" – must have 4 octets
- "y.y.y.y" – the only digit has allowed
- "255.0.0.y" – the only digit has allowed
- "666.10.10.20" – digit must between [0-255]
- "4444.11.11.11" – digit must between [0-255]
- "33.3333.33.3" – digit must between [0-255]
- "2001:0db8:85a3:0000:0000:8a2e:0370:7334" (Ipv6)


### IPv6 Rule
This form rule confirms that value is an IPv6 address.

> Passing IPv6 Rule
- "2001:0db8:85a3:0000:0000:8a2e:0370:7334" (Ipv6)

> Failing IPv6 Rule
- "210.110" – must have 4 octets
- "255" – must have 4 octets
- "y.y.y.y" – the only digit has allowed
- "255.0.0.y" – the only digit has allowed
- "666.10.10.20" – digit must between [0-255]
- "4444.11.11.11" – digit must between [0-255]
- "33.3333.33.3" – digit must between [0-255]
- "110.234.52.124"
- "192.168.0.1"
- "115.42.150.37"


### Json Rule
The given field value must be a Json String

> Passing Json Rule
```js
let data = { content: JSON.stringify({ inspire: 'love' }) };
let rules = { content: 'json' };

form(data).rules(rules).validate().errors().any();
```

> Failing Json Rule
```js
let data = { content: 'fasdf' }
let rules = { content: 'json' }

form(data).rules(rules).validate().errors().any();
```

### Max Rule
The given field must not be more than the defined maximum limit

> Passing Max Limit Rule
```js
let data = { password: 'secret' }
let rules = { password: 'max:10' }

form(data).rules(rules).validate().errors().any();
```

> Failing Max Limit Rule
```js
let data = { password: 'secret'}
let rules = { password: 'max:4' }

form(data).rules(rules).validate().errors().any();
```

### Min Rule
The given field must not be less than the defined minimum limit

> Passing Min Limit Rule
```js
let data = { password: 'secret' }
let rules = { password: 'min:6' }

form(data).rules(rules).validate().errors().any();
```

> Failing Min Limit Rule
```js
let data = { password: 'secret'}
let rules = { password: 'min:8' }

form(data).rules(rules).validate().errors().any();
```


### Not Regex Rule
The given field value must NOT match the regular expression pattern

> Passing Not Regex Rule
```js
let data = { email: 'ex.-fn' };
let rules = { email: ['not_regex:/^.+@.+$/i'] };

form(data).rules(rules).validate().errors().any();
```

> Failing Not Regex Rule
```js


let data = { email: 'example@gmail.com'}
let rules = { email: ['not_regex:/^.+@.+$/i'] }

form(data).rules(rules).validate().errors().any();
```


### Not Within Rule
The given field must NOT be "within" the comma delimited list of items

> Passing Not Within Rule
```js
let data = { language: 'PigLatin' }
let rules = { language: 'not_within:German,Spanish,English,Latin' }

form(data).rules(rules).validate().errors().any();
```

> Failing Not Within Rule
```js
let data = { pencil: '2a'};
let rules = { pencil: 'not_within:notebook,pencil,2a,marker,sharpie,whiteboard' };

form(data).rules(rules).validate().errors().any();
```

### Number Rule
The given field must be a Number (Strict Typed Check). See Numeric For Looser Type Checking

> Passing Number Rule
```js
let data = { id: 15 };
let rules = { id: ['number'] };

form(data).rules(rules).validate().errors().any();
```

> Failing Number Rule
```js
let data = { id: '15'}
let rules = { id: ['number'] }

form(data).rules(rules).validate().errors().any();
```

### Numeric Rule
Determine if a value is numeric, or is a string that can properly represent a numeric

- Numerical value, not strict number check
- Automatically attempts to cast value to numerical value.
- Validates that field value an integer, decimal, or bigInt.

> Passing Numeric Rule
```js
let data = { members: '25' }
let rules = { member: ['numeric'] }

form(data).rules(rules).validate().errors().any();
```

> Failing Numeric Rule
```js
let data = { members: 'yes' }
let rules = { member: ['numeric'] }

form(data).rules(rules).validate().errors().any();
```


### Phone Rule
The given field value must be a phone number

> Passing Phone Rule
```js
let data = { send_sms: ['555-555-5555'] }
let rules = { send_sms: ['phone'] }

form(data).rules(rules).validate().errors().any();
```

> Failing Phone Rule
```js
let data = { send_sms: '+(3) - 4 32'}
let rules = { send_sms: ['phone'] }

form(data).rules(rules).validate().errors().any();
```

> Phone Number Formats Within Testing Coverage
- +61 1 2345 6789
- +61 01 2345 6789
- 01 2345 6789
- 01-2345-6789
- (01) 2345 6789
- (01) 2345-6789
- 5555555555
- (555) 555 5555
- 555 555 5555
- +15555555555
- 555-555-5555

> _(Any contributions welcome (vuejs-validators.js repo) for improving regex form patterns for current rules as well as adding new rules)_


### Regex Rule
The given field value must match the regular expression pattern

> Passing Regex Rule
```js
let data = { email: 'example@gmail.com' };
let rules = { email: ['regex:/^.+@.+$/i'] };

form(data).rules(rules).validate().errors().any();
```

> Failing Regex Rule
```js
let data = { email: 'ex.-fn'}
let rules = { email: ['regex:/^.+@.+$/i'] }

form(data).rules(rules).validate().errors().any();
```


### Required Rule
Validates that a given field exists and its value is set

> Passing Required Rule
```js
let data = { name: 'jules' };
let rules = { name: ['required'] };

form(data).rules(rules).validate().errors().any();
```

> Failing Required Rule
```js
let data = { name: '' };
let rules = { name: ['required'] };

form(data).rules(rules).validate().errors().any();
```


### Same form Rule
The given field value is the same as another field value

> Passing Same Rule
```js
let data = { password: 'secret', confirm_password: 'secret' }
let rules = { password: 'same:confirm_password' }

form(data).rules(rules).validate().errors().any();
```

> Failing Same Rule
```js bash
let data = { password: 'asdfasdfasdf', confirm_password: 'secret' };
let rules = { password: 'same:confirm_password' };

form(data).rules(rules).validate().errors().any();
```

### Starts With Rule
The field under form must start with one of the given values.

> Passing Starts With Rule
```js
let data = { name: 'sammie' };
let rules = { name: 'starts_with:joe,sam,tom' };

form(data).rules(rules).validate().errors().any();
```

> Failing Starts With Rule
```js
let data = { name: 5 };
let rules = { name: 'starts_with:sl,ie,asx' };

form(data).rules(rules).validate().errors().any();

form.setData({ name: 'azure' })
    .setRules({ name: 'starts_with:joe,sam,tom'})
    .validate()
    .errors()
    .any();
```


### String Rule
The given field value must be a String

> Passing String Rule
```js
let data = { name: 'sammie' };
let rules = { name: 'string' };

form(data).rules(rules).validate().errors().any();
```

> Failing String Rule
```js
let data = { name: 54345  }
let rules = { name: 'string' }

form(data).rules(rules).validate().errors().any();
```

### Url Rule
The given field value must be an http(s) url

> Passing Url Rule
```js
let data = { link: 'https://cleancode.studio' };
let rules = { link: 'url' };

form(data).rules(rules).validate().errors().any();
```

> Failing Url Rule
```js
let data = { link: 'httP/ope_type@.net'}
let rules = { link: 'url' }

form(data).rules(rules).validate().errors().any();
```


### Within Rule
The given field must be "within" the comma delimited list of items

> Passing Within Rule
```js
let data = { name: 'Sam' }
let rules = { name: 'within:James,Boronica,Sam,Steve,Lenny' }

form(data).rules(rules).validate().errors().any();
```

> Failing Within Rule
```js
let data = { name: 'jake'};
let rules = { name: 'within:patricia,veronica,samuel,jeviah' };

form(data).rules(rules).validate().errors().any();
```


## Form Error Messages Api
> form.errors() Methods
- [any()](#any-errors)
- [all()](#all-errors)
- [list()](#list-errors)
- [set(errors)](#set-errors)
- [forget()](#forget-errors)
- [has(field)](#has-error)
- [get(field)](#get-error)
- [list(field)](#list-error)
- [add(field, message)](#add-error)
- [set(field, messages)](#set-field-errors)
- [forget(field)](#forget-field)
- [getValidator()](#get-errors-validator)


### Any Errors
> Determine if there are "any" errors (bool)
```js
let data = { name: '' };
let rules = { name: 'required'};
form(data).rules(rules).errors().any();
```
```
Output: true
```


### All Errors
> Retrieve all errors within the errors object

```js
let data = { name: '', email: '' };
let rules = { name: 'required', email: 'email|required' };

form(data).rules(rules).validate().errors().all();
```
```
Output:

{
    name: [
        'name field is required'
    ],
    email: [
        'email field must be an email address',
        'email field is required'
    ]
}
```



### List Errors
> Retrieve all errors within the errors object
```js
let data = { name: '', email: '' };
let rules = { name: 'required', email: 'email|required' };

form(data).rules(rules).validate().errors().list();
```
```
Output:

[
    'name field is required',
    'email field must be an email address',
    'email field is required'
]
```



### Set Errors
> Set all errors

```js
let data = { name: '' };
let rules = { name: 'required' };

form(data).rules(rules).validate();

form.errors().list(); 
// Output: ['name is a required field']

form.errors().set({ notice: ['set this random error message'] });
form.errors().list()
```
```
Output: ['set this random error message']
```


### Forget Errors
> Forget errors and reset them to empty
```js
let data = { name: '' };
let rules = { name: 'required' };

form(data).rules(rules).validate().errors().list();
// Output: ['Name is a required field']

form.errors().forget();
form.errors().list();
```
``` 
Output: []
```

### Has Error
> Determine if a specific field has error messages

```js
let data = { name: '', email: 'example@gmail.com' };
let rules = { name: 'required', email: 'email|required' };
form(data).rules(rules).validate();

form.errors().has('name');
form.errors().has('email');
form.errors().has('something_else');
```
```
Output:
has name: true
has email: false
has something_else: false
```
### Get Error
> Get _first_ error message for a specific field
```js
let data = { name: '' };
let rules = { name: 'required|min:3'};

form(data).rules(rules).validate().errors().get('name');
```
```
Output: "Name is a required field"
```

### List Error
> List errors for a specific field
```js
let data = { name: '' };
let rules = { name: 'required|min:3'};

form(data).rules(rules).validate().errors().list('name');
```
``` 
Output: ['name is a required field', 'name must be longer than 3 characters']
```

### Add Error
> Add error message for a specific field
```js
let data = { name: '' };
let rules = { name: 'required|min:3'};

form(data).rules(rules).validate().add(
    'name', 'four failures in a row. Two more failures before your locked out'
);

form.errors().list('name');
```
``` 
Output: ['name is a required field', 'name must be longer than 3 characters', 'four failures in a row. Two more failures before your locked out']
```


### Set Error
> Set error messages for a specific field
```js
let data = { name: '' };
let rules = { name: 'required' };

form(data).rules(rules).validate().list('name');
```
``` 
Output: ['name is a required field']
```
```js 
form.errors().set('name', ['random messages', 'set on', 'the name field']);
form.errors().list('name');
```
```
Output: ['random messages', 'set on', 'the name field']
```

### Forget Error
> Forget error messages for a specific field
```js
let data = { name: '' };
let rules = { name: 'required' };

form(data).rules(rules).validate().list('name');
```
``` 
Output: ['name is a required field']
```
```js 
form.errors().forget('name');
form.errors().list('name');
```
```
Output: []
``` 

---

## Extending the Error Bag

---

---

### Error Bag Macro 

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

### Error Bag ForceMacro

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


- [all](#all
- [boolean](#boolean
- [empty](#empty
- [except](#except
- [fill](#fill
- [filled](#filled
- [forceMacro](#forcemacro
- [forget](#forget
- [has](#has
- [hasAny](#hasany
- [input](#input
- [keys](#keys
- [macro](#macro
- [make](#make
- [missing](#missing
- [only](#only
- [set](#set
- [toArray](#toarray
- [wrap](#wrap

#### `all()`

The all method returns the underlying input object represented by the form:

```js
form({ name: 'sarah', email: 'sarah@gmail.com' }).all();

// { name: 'sarah', email: 'sarah@gmail.com' }
```

#### `boolean(property)`

The boolean method determines if the given field has a truthy or falsy values:
#### Truthy values: true, "true", "yes", "on", "1", 1
#### Falsy values: Everything else

```js

const LoginForm = form({
    name: '',
    email: '',
    terms: ''
})

LoginForm.terms = true
LoginForm.boolean('terms') // true

LoginForm.terms = 'true'
LoginForm.boolean('terms') // true

LoginForm.terms = 'yes'
LoginForm.boolean('terms') // true

LoginForm.terms = 'on'
LoginForm.boolean('terms') // true

LoginForm.terms = "1"
LoginForm.boolean('terms') // true

LoginForm.terms = 1
LoginForm.boolean('terms') // true
```


#### `empty(one, two, three, ...)`

The empty method determines if the input property exists but the value is empty:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.empty('name') // false
ExampleForm.empty('name', 'email') // false

ExampleForm.empty('id') // true
```

#### `except(one, two, three, ...)`

The except method grabs all of the inputs except the properties passed in:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.except('id')
/**
 * { name: 'sarah', email: 'sarah@gmail.com' }
*/

ExampleForm.except('id', 'name')
/**
 * { email: 'sarah@gmail.com' }
 */
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/except.js)

#### `fill({ key: value, keyTwo: valueTwo, etc... })`

The fill method allows you to fill in new or empty values without overriding existing values:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.fill({
    id: 2,
    name: 'tim',
    email: 'tim@gmail.com'
})

ExampleForm.all()
// { id: 2, name: 'sarah', email: 'sarah@gmail.com' }
```

#### `filled(propertyOne, propertyTwo, etc...)`

The filled method determine if a value is filled (AKA not empty):

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.filled('id', 'name') // false
ExampleForm.filled('name', 'email') // true
```

#### `forceMacro(key, fn)`
forceMacro can be used to extend form object and FORCIBLY OVERWRITE base form behavior (Use VERY cautiously and prefer macro over forceMacro)

_NOTE: Use forceLocalMacro if you only want to extend a specific form instance instead of all form instances._ 

```js
import form from 'vuejs-form';

form().forceMacro('all', function () {
    return this.keys().reduce((list, field) => ({
            ...list,  
            [field]: { 
                name: field, 
                value: this.data[field],
                errors: this.errors().list(field),
            }
        }), 
    {});
})

form({ name: 'sam' }).rules({ name: 'required' }).validate();
```

```
# forceMacro implementation of form.all() Outputs
{
    name: {
        value: 'sam',
        name: 'name',
        errors: ['Name field is required']
    }
}
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/forceMacro.js)

#### `forget(propertyOne, propertyTwo, etc...)`

The forget method will remove or "forget" a key value pair from the form input data

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.forget('id', 'name')
ExampleForm.all() // { email: 'sarah@gmail.com' }
```

#### `has(propertyOne, propertyTwo, etc...)`

The has method will determine if a key exists within the form input data

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.has('id', 'name') // true
ExampleForm.has('something', 'id', 'name') // false
```

#### `hasAny(propertyOne, propertyTwo, etc...)`

The hasAny method will determine if a key has any of the given properties within the form input data

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.hasAny('id', 'name') // true
ExampleForm.hasAny('something', 'id', 'name') // true
```

#### `input(property, default = false)`

The input method will resolve a given input value or default to false. You can define a default as the second parameter

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.input('id') // false
ExampleForm.input('id', 1) // 1
ExampleForm.input('name', 'tim') // sarah
```

#### `keys()`

The keys method will resolve an array of the input keys

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.keys() // ['id', 'name', 'email']
```


#### `macro(key, fn)`

The macro method can be used to extend the forms base behavior with custom methods/functions

_NOTE: Use localMacro if you only want to extend a specific form instance instead of all form instances._
 
```js
import form from 'vuejs-form';

form(data).macro('count', () => {
    return this.keys().length;
});

// form.count() === form.keys().length
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/macro.js)

#### `make({ ... })`

The make method will "make" a new form when used on the underlying class (With the proxy used on all forms)

```js
import { VueForm } from 'vuejs-form'

const ExampleForm = VueForm.make({ id: '', name: 'sarah', email: 'sarah@gmail.com' })
ExampleForm.all() // { id: '', name: 'sarah', email: 'sarah@gmail.com' }
```


#### `missing(propertyOne, propertyTwo, ...)`

The missing method will determine if the form is missing the following properties

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' })

ExampleForm.missing('id') // false
ExampleForm.missing('something') // true
ExampleForm.missing('name', 'email') // false
ExampleForm.missing('name', 'email', 'something') // true
```


#### `only(propertyOne, propertyTwo, ...)`

The only method will return an object of "only" the input properties you defined

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' })

ExampleForm.only('name', 'email') // { name: 'sarah', email: 'sarah@gmail.com' }
ExampleForm.only('id', 'name') // { id: '', name: 'sarah' }
ExampleForm.only('id') // { id: '' }
```


#### `set({ key: value, keyTwo: valueTwo, etc... })`

The set method allows you to set new and override previous values:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.set({
    id: 2,
    name: 'tim',
    email: 'tim@gmail.com',
    password: 'secret',
})

ExampleForm.all()
// { id: 2, name: 'tim', email: 'tim@gmail.com', password: 'secret' }
```

#### `toArray()`

The toArray method transforms the input into an array of key value pair objects:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.toArray()
/**
    [
        { key: 'id', value: '' },
        { key: 'name', value: 'sarah' },
        { key: 'email', value: 'sarah@gmail.com' }
    ]
*/

```

#### `wrap(key)`

The wrap method allows you to wrap the input within a given object key:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.wrap('data')
/**
  {
    data: {
        id: '',
        name: 'sarah',
        email: 'sarah@gmail.com'
    }
  }
*/

```

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


## Macros
 
- [Overview](#macros-overview)
- [Macros](#extend-apis-via-macros)
- [Local Macros](#extend-instances-via-local-macros)
- [Force Macros](#overwrite-a-given-apis-core-via-force-macros)
- [Force Local Macros](#overwrite-a-given-instances-core-via-force-local-macros)
- [Macro Capable Apis List](#macro-capable-apis-list) 

### Macros Overview
- Macros Are The Primary Way This Package And All Major Apis Are Extendable
- One of this packages primary goals is to be unbiased, but provide _extreme_ extendability
- Macros, and specifically four types of macros, are the primary way we are able to obtain this goal
- Macros, in concept are extremely simple. 
- They simply add functions, extending behavior
- Macros can accept arguments
- Macros have access to `this` within the callback you are registering
- There are four types of macros. 
- localMacro(name, fn) - extend instance with custom function (only the specific ) 
**Simplest Example** 
```
form().hello(); // undefined

form().macro('hello', function () {
   return 'world';
});

form().hello(); // 'world'
```

### Extend Apis Via Macros
`macro(name, fn)` 
- extend api with function 
- instance gains functions and constructor prototype gain function 
- applied to all new instances
- can not overwrite core functions
- can not overwrite pre-defined macros
- can not be applied on more than a single instance (Technically you can try, it just won't actually do anything the methods already added)

**Example: macro()**
Simplify the validation process using a "completed" method wrapper
 
```js
form().macro('completed', function () {
    this.validate();

    return this.errors().any() === false;
});

form({ name: '' }).rules({ name: 'required' }).completed(); // false
form({ name: 'samuel' }).rules({ name: 'required' }).completed(); // true
```

### Extend Instances Via LocalMacros
`localMacro(name, fn)` 
**Example:** See multi-step form example provided for `forceLocalMacro` example. It provides a powerful example of possible ways to combine local and forceLocal macros.
- extend instance with function
- instance gains function
- NOT applied to all new instances
- can not overwrite core instances
- can not overwrite pre-defined macros
- can be applied on more than a single instance, but not automatically inherited globally
**Example: localMacro**
```js
```
### Overwrite A Given Apis Core Via Force Macros
`forceMacro(name, fn)`
- overwrite core api or existing macros 
- instance and constructor prototypes apply function 
- applies on all instances
- can overwrite core functions
- can overwrite pre-defined macros
_NOTE: This is a very powerful function, use caution and when overriding core behavior understand things depend on other things under the hood. Only use this type of macro if no other macro solves your needs_

**Force Macro Example**
> Overwrite Error Message Apis Get Method To Get A Comma List Of Messages Instead Of The First Message 
```js
let example = form({ name: '' }).rules({ name: 'required|min:3' }).validate();

example.errors().get('name'); // 'Name field is required'

example.errors().forceMacro('get', function (field) {
    if (this.has(field)) {
        return this.list(field).join(', ');
    }
});

example.errors().get('name'); // 'Name field is required, Name field must be more than 3 characters'
```

### Overwrite A Given Instances Core Via Force Local Macros
`forceLocalMacro(name, fn)`
- overwrite instances core behavior or existing macros 
- instance applies function
- not applied by all instances, only on single instance 
- can overwrite core functions
- can overwrite pre-defined macros
_NOTE: Not quite as dangerous as forceMacro (it's only applied on one instance instead of globally across the api), it is still powerful and should be used only if localMacro doesn't solve your needs_

**Create A Parent Form With Multiple Child Forms**
_Example uses localMacro & forceLocalMacro (Advanced example)_

```js

let MultiStepForm = form();

MultiStepForm.localMacro('register', function (children = []) {
    this.current = 0;
    const $parent = this;

    // Set local macros on each one of the child forms 
    this.children = children.map(child => {
        // 1. localMacro: parent() method references parent form will all steps
        child.localMacro('parent', () => $parent);
        
        // 2. forceLocalMacro: override validate() method to add in a step where child validate method populates parent() errors bag
        //    Below we'll override the parent validate() method using a forceLocalMacro as well to two way bind this setup
        child.forceLocalMacro('validate', function () {
            const childForm = this;
            childForm.validator().validate();
            
            childForm.parent().errors().set({
                ...childForm.parent().errors().all(),
                ...childForm.errors().all(),
            });
            
            return this;
        })
    });
    
    /** Add helper methods for managing the multi-step form process **/
    this.step = () => this.steps(this.current); 
    this.steps = index => index !== 'undefined' && this.hasStep(index) ? this.children(index) : this.children;
    this.hasStep = index => typeof this.children[index] !== 'undefined';

    this.prevStep = () => { this.current = this.current - 1; };
    this.stepNumber = () => this.current + 1;
    this.stepsCount = () => this.steps().length ;

    this.hasPrevStep = () => this.hasStep(this.current - 1);
    this.hasNextStep = () => this.hasStep(this.current + 1);
    this.isLastStep = () => this.step() === this.steps(this.stepCount());
    this.isFirstStep = () => this.step() === this.steps(0);

    this.completedStepsCount = () => this.stepNumber();
    this.remainingStepsCount = () => this.stepsCount() - this.stepNumber();
    this.percentageCompleted = () => (this.completedStepsCount() / 100) * this.stepsCount();
    this.percentageRemaining = () => (this.remainingStepsCount() / 100) * this.stepsCount();
    this.next = () => {
        if (this.hasNextStep()) this.current = this.current + 1;        
    };
    this.prev = () => {
        if (this.hasPrevStep()) this.current = this.current - 1;
    };
    this.to = index => {
        if (this.hasStep(index)) this.current = index;
    }

    return this;
});

/** forceLocalMacro to overwrite default all method on MultiStepForm ~ aggregating all child form data **/
MultiStepForm.forceLocalMacro('all', function () {
    return this.children.reduce((data, child) => ({ 
            ...data,
            ...child
        }), 
    {});
});

/** forceLocalMacro to overwrite default validate method on MultiStepForm ~ setting all error messages **/
MultiStepForm.forceLocalMacro('validate', function () {    
    this.errors().set(
        this.children.reduce((errors, child) => ({
                ...errors,
                ...child.validate().errors().all()
            }),
        {})
    );

    return this;
});

MultiStepForm.register([
    form({ first_name: '', last_name: '' }).rules({ first_name: 'required', last_name: 'required' }),
    form({ email: '', phone_number: '' }).rules({ email: 'required|email', phone: 'required|phone' }),
    form({ password: null, password_confirmation: '' }).rules({ password: 'required|min:7|confirmed|string '}),
    form({ terms_of_services: null }).rules({ terms_of_services: 'required|accepted' })
]);

MultiStepForm.validate().errors().list();
```

```
Output:
[
    'First name is a required field',
    'Last name is a required field',
    'Email is a required field', 
    'Email must be an email',
    'Phone number is a required field', 
    'Phone number must be a valid phone number',
    'Password is a required field',
    'Password must be at least 7 characters',
    'Password must have the same value as the password confirmation field',
    'Password must be a string',
    'Terms Of Service is a required field',
    'Terms Of Service has not been accepted, please accept to continue',
]
```
### Macro Capable Api List
- [Form Api Macros](#form-api-macros)
- [Validator Api Macros](#validator-api-macros)
- [Error Message Api Macros](#error-message-api-macros)

#### Form Api Macros 
- form().macro(name, fn)
- form().localMacro(name, fn)
- form().forceMacro(name, fn)
- form().forceLocalMacro(name, fn)
  
#### Validator Api Macros
- form().validator().macro(name, fn)
- form().validator().localMacro(name, fn)
- form().validator().forceMacro(name, fn)
- form().validator().forceLocalMacro(name, fn)

#### Error Message Api Macros
- form().errors().macro(name, fn)
- form().errors().localMacro(name, fn)
- form().errors().forceMacro(name, fn)
- form().errors().forceLocalMacro(name, fn)


---

## Utilization

---

```js
import form from 'vuejs-form'

const LoginForm = form({
    name: '',
    email: '',
    password: '',
})

LoginForm.name // ''
LoginForm.name = 'sarah'
LoginForm.name // 'sarah'

form({
    name: '',
    email: '',
    password: '',
}).all() // { name: 'sarah', email: '', password: '' }
form({
    name: '',
    email: '',
    password: '',
}).has('email', 'password') // true
form({
    name: '',
    email: '',
    password: '',
}).has('email', 'something') // false
form({
    name: '',
    email: '',
    password: '',
}).hasAny('email', 'something') // true
form({
    name: '',
    email: '',
    password: '',
}).empty('email') // true
form({
    name: '',
    email: '',
    password: '',
}).filled('email') // false
form({
    name: '',
    email: '',
    password: '',
}).filled('name') // true
form({
    name: '',
    email: '',
    password: '',
}).boolean('email') // false
form({
    name: '',
    email: '',
    password: '',
}).only('email', 'name') // { email: '', name: '', }
form({
    name: '',
    email: '',
    password: '',
}).except('password') // { email: '', name: '' }
form({
    name: '',
    email: '',
    password: '',
}).input('password') // ''
form({
    name: '',
    email: '',
    password: '',
}).input('email', 'example@gmail.com') // 'example@gmail.com'

LoginForm.fill({
    name: 'tim',
    email: 'tim@gmail.com',
    password: 'secret'
})

LoginForm.all() // { name: 'sarah', email: 'tim@gmail.com', password: 'secret' }

LoginForm.set({
    name: 'jamie',
    email: 'jamie@gmail.com',
    password: 'password'
})

LoginForm.all() // { name: 'jamie', email: 'tim@gmail.com', password: 'secret' }

LoginForm.keys() // ['name', 'email', 'password']

LoginForm.missing('verified') // true
LoginForm.missing('email') // false

LoginForm.toArray()
/**
 [
    { key: 'name', value: 'jamie' },
    { key: 'email', value: 'tim@gmail.com' },
    { key: 'password', value: 'secret' }
 ]
*/

LoginForm.wrap('data')
/**
{
    data: {
        name: 'jamie',
        email: 'tim@gmail.com',
        password: 'secret'
    }
}
*/

LoginForm.forget('password', 'email')
LoginForm.all() // { name: 'jamie' }

/**
 * When dealing with HTML elements like checkboxes, your application may receive "truthy" values that are actually strings. For example, "true" or "on". For convenience, you may use the boolean method to retrieve these values as booleans. The boolean method returns true for 1, "1", true, "true", "on", and "yes". All other values will return false:
 *   Boolean checks for
*/
LoginForm.boolean('name') // false


LoginForm.terms = true
LoginForm.boolean('terms') // true
LoginForm.terms = 'true'
LoginForm.boolean('terms') // true
LoginForm.terms = 'yes'
LoginForm.boolean('terms') // true
LoginForm.terms = 'on'
LoginForm.boolean('terms') // true
LoginForm.terms = "1"
LoginForm.boolean('terms') // true
LoginForm.terms = 1
LoginForm.boolean('terms') // true

/** Anything else will return false Ex: */
LoginForm.terms = 'asdfsdf'
LoginForm.boolean('terms') // false
```

#### Extend Form Functionality
```js
import form from 'vuejs-form'

form().macro('count', () => {
    return this.keys().length
})

form().macro('mapInto', into => {
    // NOTICE: this.data is where the input object is actually stored

    this.data = Object.entries(this.data).reduce((input, [key, value]) => ({
            ...input,
            ...into(key, value)
        }),
    {});

    return this
})



const extendedForm = form({
    email: 'example@gmail',
    password: 'secret',
})

form().macro((key, value) => ({ [key]: value.split('@') })).all()
/**
 * { email: ['example', 'gmail'], password: 'secret' }
 */
```






---

## Contribute

---

PRs are welcomed to this project.
If you want to improve the vuejs-form library, add
functionality or improve the docs please feel free to submit a PR.


---

## Security Vulnerabilities

---

If you discover a security vulnerability within Clean Code Studio Packages Or Specifically within vuejs-form, please
send an e-mail to Zachary Horton via zak@cleancode.studio. All security vulnerabilities will be promptly addressed.


---

## Change Log

---
- [Release 1.2.9 (Minor)](#release-129)
- [Release 1.2.8 (Minor)](#release-128)
- [Release 1.2.7 (Minor)](#release-127)
- [Release 1.2.6 (Minor)](#release-126)
- [Release 1.2.5 (Minor)](#release-125)
- [Release 1.2.4 (Minor)](#release-124)
- [Release 1.2.3 (Minor)](#release-123)
- [Release 1.2.2 (Minor)](#release-122)
- [Release 1.2.1 (Minor)](#release-121)
- [Release 1.2.0 (Major)](#release-120)
- [Release 1.1.1](#release-111)
- [Release 1.1.0](#release-110)

---

### Release 1.2.9

---
- Removed unused documentation assets

---

### Release 1.2.8

---
- date validation rule
- date equals validation rule
- before (date) validation rule
- before_or_equal (date) validation rule
- after (date) validation rule
- after_or_equal (date) validation rule
- less_than (numeric) validation rule
- greater_than (numeric) validation rule
- lte (less than or equal numeric) validation rule
- gte (greater than or equal numeric) validation rule


---

### Release 1.2.7

---
- overwrite method outdated in place of forceMacro 
- macro method refactored, in depth testing and documentation
- localMacro method created, in depth testing, and documentation
- forceMacro method created, in depth testing, and documentation
- forceLocalMacro method created, in depth testing, and documentation
- Form Api is macro capable
- Validator Api is macro capable
- Error Messages Api is macro capable
- Macro capabilities documentation for each macro type

---

### Release 1.2.6

---

- Beautified Docs A Bit
- Vuejs Validations Ref Updated
- MessageBag Added to Package Exports
- MessageBagFactory Added to Package Exports
- Error Messages Api Documentation Readme Updated

---

### Release 1.2.5

---

- Updated Cdn Documented Link Examples To Reference Latest Instead Of Specific Version 


---

### Release 1.2.4

---

- Updated Purpose.md Documentation To Us Image Notepad Message 


---

### Release 1.2.3

---

- Updated Change Log Release Link References
- Updated Purpose.md Documentation To Us Image Notepad Message 


---

### Release 1.2.2

---

- Updated Document Headers
- Removed api.md section of Documentation
- Removed bloated docs from setup.md
- Added cdn installation and npm installation examples

---

### Release 1.2.1

---

- Updated Documentation To Start With "Purpose" Of Package
- Removed Documentation Content From Header.md
- Caught Change Log Up

---

### Release 1.2.0

---

- Documentation Updated
- First Official Stable Release
- Semantic Versioning Officially Supported

 

---

### Release 1.1.1

---

- CDN Setup
- CDN Documentation Added
- Added markdown.js for internal markup creation
- Added Security Vulnerabilities Documentation
- Added Versioning To Documentation
- Added Code Of Conduct To Documentation
- Extensive Documentation
- Security Vulnerabilities Docs
- Code Of Conduct Docs
- Markdown Support Class
- highlight.md 
- Versioning implementation documented



---

### Release 1.1.0

---

- "form.getErrors()" replaced with "form.errors()"
- "form.getValidator()" replaced with "form.validator()"
- "vuejs-validators" setup as dev dependency
- "ValidatableForm" Export ~ (Ex: const { ValidatableForm } = require('vuejs-form'))
- Default import is ValidatableForm (Ex: import form from 'vuejs-form' has validator || import { form } from 'vuejs-form' does not have validator)



---

## Versioning

---

> Vuejs-Form Will Implement Semantic Versioning
> 
> Starting (Friday, May 15, 2020)

|Code Status|Stage|Rule|Example Version|
|---|---|---|---|
|First release|New Product|Start with 1.0.0|1.0.0|
|Backward compatible bug fixes|Patch Release|Increment the third digit|1.0.1|
|Backward compatible new features|Minor Release|Increment the middle digit and reset last digit to zero|1.1.0|
|Changes that break backward compatibility|Major Release|Increment the first digit and reset middle and last digits to zero|2.0.0|

- [Learn More About Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)


---

## License

---

MIT © [Zachary Horton (Clean Code Studio)](https://www.youtube.com/channel/UCq0m4ebGqurYQLwD-1aYsvg)
