
'use strict';

const { readFileSync, readdirSync, writeFileSync } = require('fs');

const methods = readdirSync('docs/api', 'utf-8');
const tableOfContents = methods.map((file) => `- [${file.replace('.md', '')}](#${file.replace('.md', '').toLowerCase()}`).join('\n');
const methodDocumentation = methods.map((file) => {
	let content = readFileSync(`docs/api/${file}`, 'utf-8');

	const lines = content.split('\n');

	lines[0] = `###${lines[0]}`;
	lines.pop();
	lines.pop();

	content = lines.join('\n');
	content = content.replace(/(\r\n|\r|\n){2,}/g, '$1\n');

	return content;
}).join('\n\n');

const bundle = file => readFileSync(`bundler/${file}.md`, 'utf-8');
const ReadMe = (content = []) => writeFileSync('README.md', content.join('\n\n'));
const ChangeLog = (content = []) => writeFileSync('CHANGELOG.md', content.join('\n\n'));

ChangeLog([bundle('change_log')]);
ReadMe([
	...['badges', 'purpose', 'header', 'installation', 'highlight', 'vue', 'validator'].map(bundle),
	...[tableOfContents, methodDocumentation],
	...['extend', 'macros', 'utilization'].map(bundle),

	...['contribute', 'security_vulnerabilities', 'change_log', 'versioning', 'license'].map(bundle),
]);

