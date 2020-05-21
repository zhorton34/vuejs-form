---

## Playground Examples
Curious, but not 100% on whether this is what you're looking for?
Try vuejs-form out for yourself before installing -- here's some live examples ready for you to tinker away at! 

---
- [Example One (Validate Form On Each User Submit)](https://codepen.io/zhorton34/pen/zYvWZYz)
- [Example One (Validate Form On Each User Update)](https://codepen.io/zhorton34/pen/xxwaYez)
---

## Simple Vue Example

---
```html
<template>
    <div>        
        <input type='email' v-model='form.email' placeholder="Email"/>
        <span v-if="form.errors().has('email')">
            {{ form.errors().get('email') }}
        </span>

        <input type='password' v-model='form.password' placeholder="Password"/>
        <span v-if="form.errors().has('password')">
            {{ form.errors().get('password') }}
        </span>

        <input type='password' v-model='form.password_confirmation' placeholder="Confirm Password"/> 

        <button :disabled='form.empty()' @click='submit'>Submit</button>
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
            
            alert('Success, form is validated!');

            console.log('form all(): ', this.form.all());
            console.log('form except(): ', this.form.except('password_confirmation'));
        },
    }
}
```

---

## Vue Example Two

---


---

## Form API

---

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
- [make](#make)
- [missing](#missing)
- [only](#only)
- [set](#set)
- [toArray](#toarray)
- [wrap](#wrap)
- **Extending Form Api**
- [macro](#macros)
- [localMacro](#macros)
- [forceMacro](#macros)
- [forceLocalMacro](#macros)

---

## Error Messages Api

---

- [form.errors().any()](#any-errors)
- [form.errors().all()](#all-errors)
- [form.errors().list()](#list-errors)
- [form.errors().set(errors)](#set-errors)
- [form.errors().forget()](#forget-errors)
- [form.errors().has(field)](#has-error)
- [form.errors().get(field)](#get-error)
- [form.errors().list(field)](#list-error)
- [form.errors().add(field, message)](#add-error)
- [form.errors().set(field, messages)](#set-field-errors)
- [form.errors().forget(field)](#forget-field)
- [form.errors().getValidator()](#get-errors-validator)
- **Extending Errors Api**
- [form.errors().macro(name, fn)](#macros)
- [form.errors().forceMacro(name, fn)](#macros)
- [form.errors().localMacro(name, fn)](#macros)
- [form.errors().forceLocalMacro(name, fn)](#macros)


---

## Validator Api

---

- [form.rules({...})](#form-register-rules)
- [form.messages({...})](#form-customize-error-messages)
- [form.hasValidator()](#form-has-validator)
- [form.setValidator({...})](#form-set-rules)
- [form.validator()](#form-validator-instance)
- [form.validate()](#validate-form-data)
- **Validator Hooks (Documentation Stored in Vuejs Validators Repository)**
- [form.validator().before(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().after(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().passed(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().failed(callbackHook) (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- [form.validator().validateWithoutHooks() (see vuejs-validators repo)](https://github.com/zhorton34/vuejs-validators)
- **Extend Validator Api**
- [form.validator().macro(name, fn)](#macros)
- [form.validator().forceMacro(name, fn)](#macros)
- [form.validator().localMacro(name, fn)](#macros)
- [form.validator().forceLocalMacro(name, fn)](#macros)

---

## Rules Api

---
- [accepted](#accepted-rule)
- [alpha](#alpha-rule)
- [alpha_dash](#alpha_dash-rule)
- [alpha_num](#alpha_num-rule)
- [array](#array-rule)
- [between](#between-rule)
- [boolean](#boolean-rule)
- [confirmed](#confirmed-rule)
- [date](#date-rule)
- [date_equals](#date-equals-rule)
- [before (date)](#before-rule)
- [before_or_equal (date)](#before-or-equal-rule)
- [after (date)](#after-rule)
- [after_or_equal (date)](#after-or-equal-rule)
- [greater_than (numeric)](#greater-than-rule)
- [gte (Greater than or equal numeric)](#gte-rule)
- [less_than (numeric)](#less-then-rule)
- [lte (Less than or equal numeric)](#lte-rule)
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


