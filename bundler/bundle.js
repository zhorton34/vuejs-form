'use strict';

const { readFileSync, readdirSync, writeFileSync } = require('fs');

const markdown = require('./markdown.js');

// Get all API docs
const methods = readdirSync('docs/api', 'utf-8');


// Build change log "readme"

// Build table of contents
const tableOfContents = methods.map((file) => {
	const methodName = file.replace('.md', '');

	return `- [${methodName}](#${methodName.toLowerCase()})`;
}).join('\n');

const doc = group => {
	const type = `utf-8`;
	const directory = `docs/${group}`;
	const sections = readdirSync(directory, type);
	const header = readFileSync(`bundler/${group}.md`, type);
	const contents = file => readFileSync(`${directory}/${file}`, type);

	const bulb = file => `- ${file}`;
	const name = file => file.replace('.md', '');
	const link = file => `[${name(file)}](#${name(file).toLowerCase()})`;
	const title = name => name.replace(/_/, ' ').replace(/-/, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

	return [
		header,
		markdown.br(),
		markdown.hr(),
		markdown.br(),
		sections.map(section => bulb(link(section))).join('\n'),
		sections.map(file => [markdown.h3(title(name(file))), contents(file)].join('\n\n')),
		markdown.br(),
		markdown.hr(),
		markdown.br(),
	].join('\n\n');
};

// Build methods "readme"
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

ReadMe([
	...['badges', 'header', 'highlight', 'installation', 'vue', 'api'].map(bundle),
	...[tableOfContents, methodDocumentation],
	...['utilization', 'contribute', 'code_of_conduct', 'security_vulnerabilities', 'license'].map(bundle),
	doc('changes')
]);
