[![npm version](https://img.shields.io/npm/v/vuejs-form.svg?style=flat-square)](http://badge.fury.io/js/vuejs-form)
[![npm license](https://img.shields.io/npm/l/vuejs-form.svg?style=flat-square)](http://badge.fury.io/js/vuejs-form)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://github.com/zhorton34/vuejs-form/blob/master/package.json)

# Use vuejs-validations Along Side vuejs-form
(Created in parrallel, but keeps validation and form logic decoupled)
https://github.com/zhorton34/vuejs-validators
```js
<template>
    <div>
        <div v-for="(message, key) in errors" :key="`${key}.error`">
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

<script>
    import form from 'vuejs-form' 
    import validator from 'vuejs-validators'

    export default {
       data: () => ({
            form: form({ 
                name: '', 
                email: '', 
                password: '', 
                confirm_password: ''
            }).use(validator, {
                name: 'required|min:5',
                email: 'email|min:5|required',
                password: 'required|same:confirm_password',
                confirm_password: 'min:6',
            }).messages({
                'name.required': ':attribute is a required field and this is a custom message',
            }),
       }),

       watch: {
        'form.data': {
            deep: true,
            handler: 'input',
            immediate: false,
        }
       },
        
        computed: {
            errors() {
                return this.form.getErrors()
            }
        },
        methods: {
            input(current, was) {
                this.form.validate();
            },
            failed() {
                console.log('form errors: ', this.form.getErrors.all())
            },
            passed() {
                console.log('form passed: ', this.form.all());
            },
            submit() {
                return this.form.getErrors().any() ? this.failed() : this.passed();
            }
        }
    }
</script>
```

# That Vue Form (Simplified)

> Convenient Wrapper For Form Input Data (Dependency Free ~ Usable Outside Externally From Vue)


### Installation

#### NPM

```bash
npm install --save-dev vuejs-form
```

#### Yarn

```bash
yarn add vuejs-form --save
```


#### Quick Vue Overview (See Entire Form Api Below)

# <img src="https://raw.githubusercontent.com/zhorton34/vuejs-form/master/vuejs-form.png" alt="Vue JS Form">



### API

All available methods

- [all](#all)
- [boolean](#boolean)
- [empty](#empty)
- [except](#except)
- [extend](#extend)
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

#### `extend(key, fn)`

The extend method can be applied on the base Class to extend VueForm's default functionality with your own:

```js
import VueForm from 'vuejs-form'

VueForm.extend('count', () => {
    return this.keys().length
})

VueForm.extend('mapInto', into => {
    // NOTICE: this.data is where the input object is actually stored

    this.data = Object.entries(this.data).reduce((input, [key, value]) => ({
            ...input,
            ...into(key, value)
        },
    {})

    return this
})

const form = VueForm.make
const form = VueForm.make

const ExampleForm = form({
    email: 'example@gmail',
    password: 'secret',
})

ExampleForm.mapInto((key, value) => ({ [key]: value.split('@') })).all()
/**
 * { email: ['example', 'gmail'], password: 'secret' }
 */
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/extend.js)

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

#### Utilization

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
import VueForm from 'vuejs-form'

VueForm.extend('count', () => {
    return this.keys().length
})

VueForm.extend('mapInto', into => {
    // NOTICE: this.data is where the input object is actually stored

    this.data = Object.entries(this.data).reduce((input, [key, value]) => ({
            ...input,
            ...into(key, value)
        },
    {})

    return this
})

const form = VueForm.make

const extendedForm = form({
    email: 'example@gmail',
    password: 'secret',
})

extendedForm.mapInto((key, value) => ({ [key]: value.split('@') })).all()
/**
 * { email: ['example', 'gmail'], password: 'secret' }
 */
```






### Contribute

PRs are welcomed to this project. 
If you want to improve the vuejs-form library, add 
functionality or improve the docs please feel free to submit a PR.

### License

MIT © [Zachary Horton (Clean Code Studio)](https://www.youtube.com/channel/UCq0m4ebGqurYQLwD-1aYsvg)
