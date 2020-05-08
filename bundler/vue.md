### VueJS Validators & VueJS Form (Recommended for best development experience, but ultimately optional)
- [(npm)](https://www.npmjs.com/package/vuejs-validators)
- [(github)](https://github.com/zhorton34/vuejs-validators)
- _Fast_ Setup
- _Zero_ Dependencies
- _Tested_ Thoroughly
- _Simplified_ Syntax
- _Extremely_ Lightweight
- _Simplified_ Extendability
_Did You Know? Individually, each package has ZERO Non-Dev Dependencies & can be used independently, but ultimately were built in parallel with each other._

```js
<template>
    <div>
        <div v-for="(message, key) in errors" :key="`${key}.error`">
            {{ message }}
        </div>

        <input type='text' v-model='form.name' /> <br>
        <input type='email' v-model='form.email' /> <br>
        <input type='password' v-model='form.password' /> <br>
        <input type='password' v-model='form.confirm_password' /> <br>
        <hr>
        <button :disabled='form.empty()' @click='submit'>
            Complete
        </button>
    </div>
</template>

<script>
import form from 'vuejs-form'
import validatable from 'vuejs-validators'

export default {
    data: () => ({
        form: form(validatable, {
            email: '', password: '', confirm_password: ''
        })
        .rules({
            email: 'email|min:5|required',
            password: 'same:confirm_password',
            confirm_password: 'min:6|required',
        })
        .messages({
            'password.same': 'Whoops, :attribute does not match the :same field',
        }),
   }),

   computed: {
       errors() {
            return this.form.getErrors().list();
        },
   },

   watch: {
       /*--------------------------------------------------------------
        * When Should Your Form "Validate", Providing Error Messages?
        *--------------------------------------------------------------
        * Form validates every time form data is updated. To
        * display errors on form submit, remove watcher &
        * move "this.form.validate()" over to submit()
        *--------------------------------------------------------------
        */
        ['form.data']: {
            deep: true,
            handler(data, old) {
                this.form.validate();
            },
        }
   },


    methods: {
        submit() {
            return this.form.getErrors().any() ? this.failed() : this.passed();
        },
        failed() {
            console.log('failed: ', this.form.getErrors().all());
        },
        passed() {
            console.log('passed: ', this.form.all());
        },
    }
}
</script>
```
