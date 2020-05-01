# `wrap(key)`

The wrap method allows you to wrap the input within a given object key:

```js
const ExampleForm = form({ id: '', name: 'sarah', email: 'sarah@gmail.com' });

ExampleForm.wrap('data')
/**
  {
    data: {
        id: '',
        name: 'sarah',
        email: 'sarah@gmail.com'
    }
  }
*/

```
[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/wrap.js)
