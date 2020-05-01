# `toArray()`

The toArray method transforms the input into an array of key value pair objects:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.toArray()
/**
    [
        { key: 'id', value: '' },
        { key: 'name', value: 'sarah' },
        { key: 'email', value: 'sarah@gmail.com' }
    ]
*/

```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/toArray.js)
