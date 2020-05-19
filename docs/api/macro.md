# `macro(key, fn)`

The macro method can be used to extend the forms base behavior with custom methods/functions

_NOTE: Use localMacro if you only want to extend a specific form instance instead of all form instances._
 
```js
import form from 'vuejs-form';

form(data).macro('count', () => {
    return this.keys().length;
});

// form.count() === form.keys().length
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/macro.js)

