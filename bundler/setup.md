---

## Setup

---

### Npm Setup
```
npm install vuejs-form --save-dev
```

```
import from from 'vuejs-form'; // Or const form = require('vuejs-form');

let RegisterForm = form({
    email: '',
    password: '',
    password_confirmation: ''
})
.rules({
    email: ['required', 'email', 'min:5'],
    password: ['min:5', 'required', 'confirmed'],
})
.messages({
    'email.email': 'Email must be an email',
    'email.required': 'Email is a required field',
    'email.min': 'Email is less than :min characters',

    'password.required': 'Password is required',
    'password.confirmed': 'Password value must match password confirmation value',
    'password.min': 'Password is not secure enough (Must be longer than :min characters)',
})
.validate();
```

### CDN Setup

```
<script src="https://unpkg.com/vuejs-form@latest/build/vuejs-form.min.js"></script>

<script>
    let RegisterForm = form({
        email: '',
        password: '',
        password_confirmation: '',
    })
    .rules({
        email: ['required', 'email', 'min:5'],
        password: ['min:5', 'required', 'confirmed'],
    })
    .messages({
        'email.email': 'Email must be an email',
        'email.required': 'Email is a required field',
        'email.min': 'Email is less than :min characters',

        'password.required': 'Password is required',
        'password.confirmed': 'Password value must match password confirmation value',
        'password.min': 'Password is not secure enough (Must be longer than :min characters)',
    })
    .validate();
</script>
```
