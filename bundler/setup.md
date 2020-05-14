## Setup

#### CDN

```
<script src="https://unpkg.com/vuejs-form@1.1.0/build/vuejs-form.min.js"></script>

<script>
    let RegisterForm = form.ValidatableForm({
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
    });

    // Form Api
    RegisterForm.keys(); // ['email', 'password', 'password_confirmation']
    RegisterForm.except('password', 'password_confirmation'); // { email: '' },
    RegisterForm.filled('password', 'password_confirmation') // false;

    RegisterForm.fill('password', 'secret');
    RegisterForm.filled('password') // true;

    RegisterForm.fill('password', 'updated_password');
    RegisterForm.password // 'secret'

    RegisterForm.set({ 'password': 'updated_password' });
    RegisterForm.password // 'updated_password'

    RegisterForm.has('random_field'); // false
    RegisterForm.filled('random_field'); // false

    RegisterForm.empty('random_field'); // true
    RegisterForm.missing('random_field'); // true

    RegisterForm.filled('password'); // true
    RegisterForm.filled('random_field'); // false

    RegisterForm.has('password', 'random_field'); // false
    RegisterForm.hasAny('password'); // false

    RegisterForm.missing('random_field'); // true
    RegisterForm.missing('password_confirmation'); // false

    RegisterForm.empty('password_confirmation'); // true
    RegisterForm.filled('password_confirmation'); // false

    RegisterForm.all(); // { email: '', password: 'updated_password', password_confirmation: '' },
    RegisterForm.wrap('data'); // { data { email: '', password: 'updated_password', password_confirmation: '' } }

    RegisterForm.except('email'); //  { password: 'updated_password', password_confirmation: '' }
    RegisterForm.only('password_confirmation', 'password'); // { password: 'updated_password', password_confirmation: ''}

    RegisterForm.toArray(); // [ { key: 'email', value: '' }, { key: 'password', value: 'updated_password' }, { key: 'password_confirmation': value: '' } ]

    // Validator Api
    /** Resolve Errors Based On Current Values **/
    RegisterForm.validate();

    /** Errors Api **/
    RegisterForm.errors().all();

    RegisterForm.errors().list();
    RegisterForm.errors().list('email');

    RegisterForm.errors().forget();
    RegisterForm.errors().forget('email');

    RegisterForm.errors().get('email');
    RegisterForm.errors().has('password');
</script>
```
