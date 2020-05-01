# `filled(property)`

The filled method determine if a value is filled (AKA not empty):

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.filled('id') // false
ExampleForm.filled('name') // true
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/filled.js)
