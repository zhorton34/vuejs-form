# `fill({ key: value, keyTwo: valueTwo, etc... })`

The fill method allows you to fill in new or empty values without overriding existing values:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.fill({
    id: 2,
    name: 'tim',
    email: 'tim@gmail.com'
})

ExampleForm.all()
// { id: 2, name: 'sarah', email: 'sarah@gmail.com' }
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/fill.js)
