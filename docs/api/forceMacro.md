# `forceMacro(key, fn)`
forceMacro can be used to extend form object and FORCIBLY OVERWRITE base form behavior (Use VERY cautiously and prefer macro over forceMacro)

_NOTE: Use forceLocalMacro if you only want to extend a specific form instance instead of all form instances._ 

```js
import form from 'vuejs-form';

form().forceMacro('all', function () {
    return this.keys().reduce((list, field) => ({
            ...list,  
            [field]: { 
                name: field, 
                value: this.data[field],
                errors: this.errors().list(field),
            }
        }), 
    {});
})

form({ name: 'sam' }).rules({ name: 'required' }).validate();
```

```
# forceMacro implementation of form.all() Outputs
{
    name: {
        value: 'sam',
        name: 'name',
        errors: ['Name field is required']
    }
}
```

[View source on GitHub](https://github.com/zhorton34/vuejs-form.js/blob/master/src/methods/forceMacro.js)

