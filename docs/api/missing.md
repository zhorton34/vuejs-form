# `missing(propertyOne, propertyTwo, ...)`

The missing method will determine if the form is missing the following properties

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' })

ExampleForm.missing('id') // false
ExampleForm.missing('something') // true
ExampleForm.missing('name', 'email') // false
ExampleForm.missing('name', 'email', 'something') // true
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/missing.js)
