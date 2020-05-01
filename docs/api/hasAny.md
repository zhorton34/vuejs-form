# `hasAny(propertyOne, propertyTwo, etc...)`

The hasAny method will determine if a key has any of the given properties within the form input data

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.hasAny('id', 'name') // true
ExampleForm.hasAny('something', 'id', 'name') // true
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/hasAny.js)
