## Macros
 
- [Overview](#macros-overview)
- [Macros](#extend-apis-via-macros)
- [Local Macros](#extend-instances-via-local-macros)
- [Force Macros](#overwrite-a-given-apis-core-via-force-macros)
- [Force Local Macros](#overwrite-a-given-instances-core-via-force-local-macros)
- [Macro Capable Apis List](#macro-capable-apis-list) 

### Macros Overview
- Macros Are The Primary Way This Package And All Major Apis Are Extendable
- One of this packages primary goals is to be unbiased, but provide _extreme_ extendability
- Macros, and specifically four types of macros, are the primary way we are able to obtain this goal
- Macros, in concept are extremely simple. 
- They simply add functions, extending behavior
- Macros can accept arguments
- Macros have access to `this` within the callback you are registering
- There are four types of macros. 
- localMacro(name, fn) - extend instance with custom function (only the specific ) 
**Simplest Example** 
```
form().hello(); // undefined

form().macro('hello', function () {
   return 'world';
});

form().hello(); // 'world'
```

### Extend Apis Via Macros
`macro(name, fn)` 
- extend api with function 
- instance gains functions and constructor prototype gain function 
- applied to all new instances
- can not overwrite core functions
- can not overwrite pre-defined macros
- can not be applied on more than a single instance (Technically you can try, it just won't actually do anything the methods already added)

**Example: macro()**
Simplify the validation process using a "completed" method wrapper
 
```js
form().macro('completed', function () {
    this.validate();

    return this.errors().any() === false;
});

form({ name: '' }).rules({ name: 'required' }).completed(); // false
form({ name: 'samuel' }).rules({ name: 'required' }).completed(); // true
```

### Extend Instances Via LocalMacros
`localMacro(name, fn)` 
**Example:** See multi-step form example provided for `forceLocalMacro` example. It provides a powerful example of possible ways to combine local and forceLocal macros.
- extend instance with function
- instance gains function
- NOT applied to all new instances
- can not overwrite core instances
- can not overwrite pre-defined macros
- can be applied on more than a single instance, but not automatically inherited globally
**Example: localMacro**
```js
```
### Overwrite A Given Apis Core Via Force Macros
`forceMacro(name, fn)`
- overwrite core api or existing macros 
- instance and constructor prototypes apply function 
- applies on all instances
- can overwrite core functions
- can overwrite pre-defined macros
_NOTE: This is a very powerful function, use caution and when overriding core behavior understand things depend on other things under the hood. Only use this type of macro if no other macro solves your needs_

**Force Macro Example**
> Overwrite Error Message Apis Get Method To Get A Comma List Of Messages Instead Of The First Message 
```js
let example = form({ name: '' }).rules({ name: 'required|min:3' }).validate();

example.errors().get('name'); // 'Name field is required'

example.errors().forceMacro('get', function (field) {
    if (this.has(field)) {
        return this.list(field).join(', ');
    }
});

example.errors().get('name'); // 'Name field is required, Name field must be more than 3 characters'
```

### Overwrite A Given Instances Core Via Force Local Macros
`forceLocalMacro(name, fn)`
- overwrite instances core behavior or existing macros 
- instance applies function
- not applied by all instances, only on single instance 
- can overwrite core functions
- can overwrite pre-defined macros
_NOTE: Not quite as dangerous as forceMacro (it's only applied on one instance instead of globally across the api), it is still powerful and should be used only if localMacro doesn't solve your needs_

**Create A Parent Form With Multiple Child Forms**
_Example uses localMacro & forceLocalMacro (Advanced example)_

```js

let MultiStepForm = form();

MultiStepForm.localMacro('register', function (children = []) {
    this.current = 0;
    const $parent = this;

    // Set local macros on each one of the child forms 
    this.children = children.map(child => {
        // 1. localMacro: parent() method references parent form will all steps
        child.localMacro('parent', () => $parent);
        
        // 2. forceLocalMacro: override validate() method to add in a step where child validate method populates parent() errors bag
        //    Below we'll override the parent validate() method using a forceLocalMacro as well to two way bind this setup
        child.forceLocalMacro('validate', function () {
            const childForm = this;
            childForm.validator().validate();
            
            childForm.parent().errors().set({
                ...childForm.parent().errors().all(),
                ...childForm.errors().all(),
            });
            
            return this;
        })
    });
    
    /** Add helper methods for managing the multi-step form process **/
    this.step = () => this.steps(this.current); 
    this.steps = index => index !== 'undefined' && this.hasStep(index) ? this.children(index) : this.children;
    this.hasStep = index => typeof this.children[index] !== 'undefined';

    this.prevStep = () => { this.current = this.current - 1; };
    this.stepNumber = () => this.current + 1;
    this.stepsCount = () => this.steps().length ;

    this.hasPrevStep = () => this.hasStep(this.current - 1);
    this.hasNextStep = () => this.hasStep(this.current + 1);
    this.isLastStep = () => this.step() === this.steps(this.stepCount());
    this.isFirstStep = () => this.step() === this.steps(0);

    this.completedStepsCount = () => this.stepNumber();
    this.remainingStepsCount = () => this.stepsCount() - this.stepNumber();
    this.percentageCompleted = () => (this.completedStepsCount() / 100) * this.stepsCount();
    this.percentageRemaining = () => (this.remainingStepsCount() / 100) * this.stepsCount();
    this.next = () => {
        if (this.hasNextStep()) this.current = this.current + 1;        
    };
    this.prev = () => {
        if (this.hasPrevStep()) this.current = this.current - 1;
    };
    this.to = index => {
        if (this.hasStep(index)) this.current = index;
    }

    return this;
});

/** forceLocalMacro to overwrite default all method on MultiStepForm ~ aggregating all child form data **/
MultiStepForm.forceLocalMacro('all', function () {
    return this.children.reduce((data, child) => ({ 
            ...data,
            ...child
        }), 
    {});
});

/** forceLocalMacro to overwrite default validate method on MultiStepForm ~ setting all error messages **/
MultiStepForm.forceLocalMacro('validate', function () {    
    this.errors().set(
        this.children.reduce((errors, child) => ({
                ...errors,
                ...child.validate().errors().all()
            }),
        {})
    );

    return this;
});

MultiStepForm.register([
    form({ first_name: '', last_name: '' }).rules({ first_name: 'required', last_name: 'required' }),
    form({ email: '', phone_number: '' }).rules({ email: 'required|email', phone: 'required|phone' }),
    form({ password: null, password_confirmation: '' }).rules({ password: 'required|min:7|confirmed|string '}),
    form({ terms_of_services: null }).rules({ terms_of_services: 'required|accepted' })
]);

MultiStepForm.validate().errors().list();
```

```
Output:
[
    'First name is a required field',
    'Last name is a required field',
    'Email is a required field', 
    'Email must be an email',
    'Phone number is a required field', 
    'Phone number must be a valid phone number',
    'Password is a required field',
    'Password must be at least 7 characters',
    'Password must have the same value as the password confirmation field',
    'Password must be a string',
    'Terms Of Service is a required field',
    'Terms Of Service has not been accepted, please accept to continue',
]
```
### Macro Capable Api List
- [Form Api Macros](#form-api-macros)
- [Validator Api Macros](#validator-api-macros)
- [Error Message Api Macros](#error-message-api-macros)

#### Form Api Macros 
- form().macro(name, fn)
- form().localMacro(name, fn)
- form().forceMacro(name, fn)
- form().forceLocalMacro(name, fn)
  
#### Validator Api Macros
- form().validator().macro(name, fn)
- form().validator().localMacro(name, fn)
- form().validator().forceMacro(name, fn)
- form().validator().forceLocalMacro(name, fn)

#### Error Message Api Macros
- form().errors().macro(name, fn)
- form().errors().localMacro(name, fn)
- form().errors().forceMacro(name, fn)
- form().errors().forceLocalMacro(name, fn)
