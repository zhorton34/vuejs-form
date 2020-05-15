## Playground Examples
- [Vue Example One (Live Example)](https://codepen.io/zhorton34/pen/zYvWZYz)
- [Vue Example Two (Live Example)](https://codepen.io/zhorton34/pen/xxwaYez)

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

## Form API

All Available Methods

- [all](#all)
- [boolean](#boolean)
- [empty](#empty)
- [except](#except)
- [fill](#fill)
- [filled](#filled)
- [forget](#forget)
- [has](#has)
- [hasAny](#hasany)
- [input](#input)
- [keys](#keys)
- [macro](#macro)
- [make](#make)
- [missing](#missing)
- [only](#only)
- [set](#set)
- [toArray](#toarray)
- [wrap](#wrap)

## Validator Api
- [form.rules({...})](#form-register-rules)
- [form.messages({...})](#form-customize-error-messages)
- [form.validator(...)](#form-validator-instance)
- [form.validate(...)](#validate-form-data)
- [form.hasValidator()](#form-has-validator)
- [form.setValidator({...})](#form-set-rules)

## Rules Api
- [accepted](#accepted-rule)
- [alpha](#alpha-rule)
- [alpha_dash](#alpha_dash-rule)
- [alpha_num](#alpha_num-rule)
- [array](#array-rule)
- [between](#between-rule)
- [boolean](#boolean-rule)
- [confirmed](#confirmed-rule)
- [different](#different-rule)
- [digits](#digits-rule)
- [digits_between](#digits_between-rule)
- [distinct](#distinct-rule)
- [email](#email-rule)
- [ends_with](#ends_with-rule)
- [integer](#integer-rule)
- [ip](#ip-rule)
- [ipv4](#ipv4-rule)
- [ipv6](#ipv6-rule)
- [json](#json-rule)
- [max](#max-rule)
- [min](#min-rule)
- [not_regex](#not_regex-rule)
- [not_within](#not_within-rule)
- [number](#number-rule)
- [numeric](#numeric-rule)
- [phone](#phone-rule)
- [regex](#regex-rule)
- [required](#required-rule)
- [same](#same-rule)
- [starts_with](#starts_with-rule)
- [string](#string-rule)
- [url](#url-rule)
- [within](#within-rule)

## Error Messages Api
> form.errors() Methods
- [any()](#any-errors)
- [all()](#all-errors)
- [list()](#list-errors)
- [set(errors)](#set-errors)
- [forget()](#forget-errors)
- [has(field)](#has-error)
- [get(field)](#get-error)
- [list(field)](#list-error)
- [add(field, message)](#add-error)
- [set(field, messages)](#set-field-errors)
- [forget(field)](#forget-field)
- [getValidator()](#get-errors-validator)

