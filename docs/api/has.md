# `has(propertyOne, propertyTwo, etc...)`

The has method will determine if a key exists within the form input data

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.has('id', 'name') // true
ExampleForm.has('something', 'id', 'name') // false
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/has.js)
