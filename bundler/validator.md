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
