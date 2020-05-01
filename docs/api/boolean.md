# `boolean(property)`

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

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/boolean.js)
