# `filled(propertyOne, propertyTwo, etc...)`

The filled method determine if a value is filled (AKA not empty):

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.filled('id', 'name') // false
ExampleForm.filled('name', 'email') // true
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/filled.js)
