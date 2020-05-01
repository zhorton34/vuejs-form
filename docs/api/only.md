# `only(propertyOne, propertyTwo, ...)`

The only method will return an object of "only" the input properties you defined

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' })

ExampleForm.only('name', 'email') // { name: 'sarah', email: 'sarah@gmail.com' }
ExampleForm.only('id', 'name') // { id: '', name: 'sarah' }
ExampleForm.only('id') // { id: '' }
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/only.js)
