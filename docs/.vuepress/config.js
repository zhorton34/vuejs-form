const { readdirSync } = require('fs');

module.exports = {
  title: 'vuejs-form',
  description: 'Simplified, dependency free wrapper for easily interacting with form input data.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation.md' },
      { text: 'Usage', link: '/usage.md' },
      { text: 'API', link: '/api.md' },
      { text: 'GitHub', link: 'https://github.com/zhorton34/vuejs-form.js' },
    ],
    sidebar: [{
      title: 'Get started',
      collapsable:false,
      children: [
        'installation',
        'usage',
      ],
    }, {
      title: 'API',
      collapsable: false,
      children: readdirSync('docs/api', 'utf-8').map(file => `/api/${file}`),
    }],
  },
};
