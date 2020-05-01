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

LoginForm.all() // { name: 'sarah', email: '', password: '' }
LoginForm.has('email', 'password') // true
LoginForm.has('email', 'something') // false
LoginForm.hasAny('email', 'something') // true
LoginForm.empty('email') // true
LoginForm.filled('email') // false
LoginForm.filled('name') // true
LoginForm.boolean('email') // false
LoginForm.only('email', 'name') // { email: '', name: '', }
LoginForm.except('password') // { email: '', name: '' }
LoginForm.input('password') // ''
LoginForm.input('email', 'example@gmail.com') // 'example@gmail.com'

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




