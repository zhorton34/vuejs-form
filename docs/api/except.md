# `except(one, two, three, ...)`

The except method grabs all of the inputs except the properties passed in:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.except('id')
/**
 * { name: 'sarah', email: 'sarah@gmail.com' }
*/

ExampleForm.except('id', 'name')
/**
 * { email: 'sarah@gmail.com' }
 */
```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/except.js)

