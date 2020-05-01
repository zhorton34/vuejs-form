# `forget(propertyOne, propertyTwo, etc...)`

The forget method will remove or "forget" a key value pair from the form input data

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.forget('id', 'name')
ExampleForm.all() // { email: 'sarah@gmail.com' }
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/forget.js)
