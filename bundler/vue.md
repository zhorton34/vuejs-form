### VueJS Form Can Comes With VueJS Validators Rules
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
        <div v-if="form.errors().any()" v-for="(message, key) in form.errors().list()" :key="`${key}.error`">
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
import { ValidatableForm } from 'vuejs-form'

export default {
    data: () => ({
        form: ValidatableForm({
            email: '',
            password: '',
            confirm_password: ''
        })
        .rules({
            email: 'email|min:5|required',
            password: 'same:confirm_password',
            confirm_password: 'min:6|required',
        })
        .messages({
            'email.required': ':attribute is required',
            'email.email': ':attribute must be a valid email',
            'email.min': ':attribute may not have less than :min characters',
            'password.same': 'Whoops, :attribute does not match the :same field',

        }),
   }),

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
        failed() {
            console.log('failed: ', this.form.errors().all());
        },
        passed() {
            console.log('passed: ', this.form.all());
        },
        submit() {
            return this.form.errors().any()
                ? this.failed()
                : this.passed();
        },
    }
}
</script>
```
