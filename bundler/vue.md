#### Quick Vue Overview (See Entire Form Api Below)

```js
import form from 'vuejs-form';

export default {
    data() {
        return {
            form: form({
                name: '',
                password: ''
            })
        }
    },

    methods: {
        submit() {
            // this.form.all()
            // Or nest the form input using this.form.wrap('data')
        }
    }
}
</script>
```


```html
<template>
    <div class='form-container'>
        <input type='text' v-model='form.name' />
        <input type='password' v-model='form.password' />

        <button :disabled="form.empty('name', 'password')" @click='submit' class='btn btn-primary'>
            Submit
        </button>
    </div>
</template>
```


