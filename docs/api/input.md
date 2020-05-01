# `input(property, default = false)`

The input method will resolve a given input value or default to false. You can define a default as the second parameter

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.input('id') // false
ExampleForm.input('id', 1) // 1
ExampleForm.input('name', 'tim') // sarah
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/input.js)
