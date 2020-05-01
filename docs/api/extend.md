# `extend(key, fn)`

The extend method can be applied on the base Class to extend VueForm's default functionality with your own:

```js
import VueForm from 'vuejs-form'

VueForm.extend('count', () => {
    return this.keys().length
})

VueForm.extend('mapInto', into => {
    // NOTICE: this.data is where the input object is actually stored

    this.data = Object.entries(this.data).reduce((input, [key, value]) => ({
            ...input,
            ...into(key, value)
        },
    {})

    return this
})

const form = VueForm.make
const form = VueForm.make

const ExampleForm = form({
    email: 'example@gmail',
    password: 'secret',
})

ExampleForm.mapInto((key, value) => ({ [key]: value.split('@') })).all()
/**
 * { email: ['example', 'gmail'], password: 'secret' }
 */
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/extend.js)

