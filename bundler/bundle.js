'use strict';

const { readFileSync, readdirSync, writeFileSync } = require('fs');

const markdown = require('./markdown.js');
// Get all markdown stubs
const header = readFileSync('bundler/header.md', 'utf-8');
const badges = readFileSync('bundler/badges.md', 'utf-8');
const installation = readFileSync('bundler/installation.md', 'utf-8');
const utilization = readFileSync('bundler/utilization.md', 'utf-8');
const api = readFileSync('bundler/api.md', 'utf-8');
const vue = readFileSync('bundler/vue.md', 'utf-8');
const contribute = readFileSync('bundler/contribute.md', 'utf-8');
const license = readFileSync('bundler/license.md', 'utf-8');

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
		markdown.hr(),
		markdown.br(),
		sections.map(section => bulb(link(section))).join('\n'),
		sections.map(file => [title(name(file)), contents(file), '---'].join('\n\n')),
		markdown.br(),
		markdown.hr()
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

writeFileSync(
	'README.md',
	[
		badges,
		header,
		installation,
		vue,
		api,
		tableOfContents,
		methodDocumentation,
		utilization,
		contribute,
		license,
		doc('changes'),
	].join('\n\n'),
);
