
'use strict';

const markdown = {
	make: (...lines) => {
		return [
			'\n',
			lines.reduce((created, line) => [
				...created,
				line(markdown)
			], []).join('\n'),
			'\n',
		];
	},

	url: (text, url) => `[${text}](${url})`,
	link: (text, link) => `[${text}](#${link})`,

	li: text => `- ${text}`,
	list: list => list.map(item => `- ${item}`).join('\n'),
	ul: {
		li: text => `- ${text}`,
		url: (text, url) => markdown.url(text, url),
		link: (text, link) => markdown.link(text, link),
	},

	table: ({ headers, rows }) => {
		const make = items => ['|', items, '|'];
		return [
			make(headers.join('|')),
			make(headers.map(header => '---').join('|')),
			...rows.reduce((rows, row) => [ ...rows, make(row.join('|')) ], []),
		]
		.map(row => row.join(''))
		.join('\n');
	},
	hr: () => '---',
	br: () => `\n`,
	h1: text => `# ${text}`,
	h2: text => `## ${text}`,
	h3: text => `### ${text}`,
	h4: text => `#### ${text}`,
	h5: text => `##### ${text}`,

	pre: text => '```' + text + '```',
	bold: text => `**${text}**`,
	italic: text => `_${text}_`,
	quote: text => `> ${text}`,

	inline: text => "`" + text + "`",
	block: text => "```" + text + "```",
	js: text => "```javascript" + text + "```",
	py: text => "```python" + text + "```",
	bash: text => "```bash" + text + "```",
	youtube: ({ id, width = '240', height = '240', border = '10', alt = 'Tutorial', target = "_blank" }) => `
		<a href="http://www.youtube.com/watch?feature=player_embedded&v=${id}" target="${target}">
			<img src="http://img.youtube.com/vi/${id}/0.jpg" alt="${alt}" width="${width}" height="${height}" border="${border}" />
		</a>
	`,
};

module.exports = markdown;
module.exports.default = markdown;
module.exports.markdown = markdown;
