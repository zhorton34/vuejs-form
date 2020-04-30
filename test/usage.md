# Usage

### JavaScript

```vue (require)

<template>
	<div>
		<input type='email' v-model='form.email' />
		<input type='password' v-model='form.password' />
	</div>
</template>

<script>
	const form = require('vuejs-form')

	export default {
		data() {
			return {
				login: form({
					email: '',
					password: ''
				})
			}
		}
	}
</script>
```

```(vue import)

<template>
	<div>
		<input type='email' v-model='form.email' />
		<input type='password' v-model='form.password' />
	</div>
</template>

<script>
	import form from 'vuejs-form'

	export default {
		data() {
			return {
				login: form({
					email: '',
					password: ''
				})
			}
		}
	}
</script>
```

```(vue import using the underlying Form class)

<template>
	<div>
		<input type='email' v-model='form.email' />
		<input type='password' v-model='form.password' />
	</div>
</template>

<script>
	import { Form } from 'vuejs-form'

	export default {
		data() {
			return {
				login: new Form({
					email: '',
					password: ''
				})
			}
		}
	}
</script>
```


```(use vuejs-form outside of vue)
// Using the underlying class


import form from 'vuejs-form'

form({
	first_name: '',
	last_name: '',
	...etc
})

form.all()
form.has('first_name')
// etc...
```