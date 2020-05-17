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




