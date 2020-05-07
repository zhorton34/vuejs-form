#### Quick Vue Overview (Use With Vuejs-validators)
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
    import validator from 'vuejs-validators'

    export default {
       data: () => ({
            form: form({
                name: '',
                email: '',
                password: '',
                confirm_password: ''
            }).use(validator, {
                name: 'required|min:5',
                email: 'email|min:5|required',
                password: 'required|same:confirm_password',
                confirm_password: 'min:6',
            }).messages({
                'name.required': ':attribute is a required field and this is a custom message',
            }),
       }),

       watch: {
        'form.data': {
            deep: true,
            handler: 'input',
            immediate: false,
        }
       },

        computed: {
            errors() {
                return this.form.getErrors().list()
            }
        },
        methods: {
            input(current, was) {
                this.form.validate();
            },
            failed() {
                console.log('form errors: ', this.form.getErrors.all())
            },
            passed() {
                console.log('form passed: ', this.form.all());
            },
            submit() {
                return this.form.getErrors().any() ? this.failed() : this.passed();
            }
        }
    }
</script>
```
