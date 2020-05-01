# `empty(one, two, three, ...)`

The empty method determines if the input property exists but the value is empty:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.empty('name') // false
ExampleForm.empty('name', 'email') // false

ExampleForm.empty('id') // true
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/empty.js)
