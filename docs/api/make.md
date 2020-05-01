# `make({ ... })`

The make method will "make" a new form when used on the underlying class (With the proxy used on all forms)

```js
import { VueForm } from 'vuejs-form'

const ExampleForm = VueForm.make({ id: '', name: 'sarah', email: 'sarah@gmail.com' })
ExampleForm.all() // { id: '', name: 'sarah', email: 'sarah@gmail.com' }
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/make.js)
