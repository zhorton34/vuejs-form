# `macro(key, fn)`

The macro method can be used to extend upon the form object:

```js
import form from 'vuejs-form';

form(data).macro('count', () => {
    return this.keys().length;
});

// form.count() === form.keys().length
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/macro.js)

