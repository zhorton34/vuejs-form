# `macro(key, fn)`

The macro method can be used to extend upon the form object:

```js
import form from 'vuejs-form';

form().macro('count', () => {
    return this.keys().length;
});

form().macro('mapInto', into => {
    return this.toArray().reduce((accumulated, { key, value }) => ({
            ...accumulated,
            ...into(key, value)
        }),
    {});
});

const ExampleForm = form({
    email: 'example@gmail',
    password: 'secret',
});

ExampleForm.mapInto((key, value) => ({ [`example_form_${key}`]: value }));
// { example_form_email: 'example@gmail.com', 'example_form_password': 'secret' };

```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/extend.js)

