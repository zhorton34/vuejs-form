# `set({ key: value, keyTwo: valueTwo, etc... })`

The set method allows you to set new and override previous values:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.set({
    id: 2,
    name: 'tim',
    email: 'tim@gmail.com',
    password: 'secret',
})

ExampleForm.all()
// { id: 2, name: 'tim', email: 'tim@gmail.com', password: 'secret' }
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/set.js)
