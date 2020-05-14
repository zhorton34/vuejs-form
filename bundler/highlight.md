## Playground Example
- [CodePen (Live Interactive Vue JS Form Example)](https://codepen.io/zhorton34/pen/zYvWZYz)


## Vue Example One

> Show First Error For Each Field And
> 
> Only Validate Form (AKA find errors) when Form Data is submitted
```html
<template>
    <div>        
        <input type='text' v-model='form.name' />
        <span v-if="form.errors().has('name')" v-text="form.errors().get('email')"></span>

        <input type='email' v-model='form.email' />
        <span v-if="form.errors().has('email')" v-text="form.errors().get('email')"></span>

        <input type='password' v-model='form.password' />
        <span v-if="form.errors().has('password')" v-text="form.errors().get('password')"></span>

        <input type='password' v-model='form.password_confirmation' />
        <span v-if="form.errors().has('password_confirmation')" v-text="form.errors().get('password_confirmation')"></span>
 
        <hr>

        <button :disabled='form.empty()' @click='submit'>
            Complete
        </button>
    </div>
</template>
```
```js
import form from 'vuejs-form'

export default {
    data: () => ({
        form: form({
            email: '',
            password: '',
            password_confirmation: ''
        })
        .rules({
            email: 'email|min:5|required',
            password: 'required|min:5|confirmed'
        })
        .messages({
            'email.email': 'Email field must be an email (durr)',
            'password.confirmed': 'Whoops, :attribute value does not match :confirmed value',
        }),
   }),

    methods: {
        submit() {
            if (this.form.validate().errors().any()) return;

            console.log('submit: ', this.form.only('email', 'password'));
            console.log('submit: ', this.form.except('password_confirmation'));
        },
    }
}
```


## Vue Example Two

> Show all form errors for all form fields
>
> Re-validate Form Any time user updates form data for any field

```html
<template>
    <div>
        <div v-if="form.errors().any()" v-for="(message, key) in form.errors().list()" :key="`${key}.error`">
            {{ message }}
        </div>
        
        <input type='email' v-model='form.email' /> <br>
        <input type='password' v-model='form.password' /> <br>
        <input type='password' v-model='form.password_confirmation' /> <br>
        
        <hr>

        <button :disabled='form.empty()' @click='submit'>
            Complete
        </button>
    </div>
</template>
```
```js
import form from 'vuejs-form'

export default {
    data: () => ({
        form: form({
            email: '',
            password: '',
            password_confirmation: ''
        })
        .rules({
            email: 'email|min:5|required',
            password: 'required|min:5|confirmed'
        })
        .messages({
            'email.email': ':attribute must be a valid email',
            'email.min': ':attribute may not have less than :min characters',
            'password.confirmed': 'Whoops, :attribute value does not match :confirmed value',
        }),
   }),

   watch: {
       /*--------------------------------------------------------------
        | When Should Your Form "Validate", Providing Error Messages?
        |--------------------------------------------------------------
        | 
        |   Form validates every time form data is updated. To
        |   display errors on form submit, remove watcher &
        |   move "this.form.validate()" over to submit()
        |
        */

        ['form.data']: {
            deep: true,
            immediate: false,
            handler: 'onFormChange'
        }
   },

    methods: {
        onFormChange(after, before) {
             this.form.validate()
        },
       
        submit() {
            return this.form.errors().any() ? this.failed() : this.passed();
        },

        failed() {
            console.log('errors: ', this.form.errors().all());
        },

        passed() {
            console.log('data: ', this.form.all());
            console.log('wrapped data: ', this.form.wrap('data'));
        }
    }
}
```
