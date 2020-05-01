> Convenient and dependency free proxied form input wrapper for simplified checks and passing of form input

### Installation

#### NPM

```bash
npm install vuejs-form.js --save
```

#### Yarn

```bash
yarn add vuejs-form.js
```

### API

All available methods

- [all](#all)

#### `all()`

The all method returns the underlying input object represented by the form:

```js
form({ name: 'sarah', email: 'sarah@gmail.com' }).all();

// { name: 'sarah', email: 'sarah@gmail.com' }
```

### Contribute

PRs are welcomed to this project. 
If you want to improve the vuejs-form library, add 
functionality or improve the docs please feel free to submit a PR.

### License

MIT © [Zachary Horton (Clean Code Studio)](https://www.youtube.com/channel/UCq0m4ebGqurYQLwD-1aYsvg)