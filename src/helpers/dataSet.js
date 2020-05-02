const example = {
	family: {
		mom: { name: '' }
	}
};
const dataSet = function(target, value, path = '') {
	if (path === '') return { ...target, ...value };

	path = Array.isArray(path) ? path : path.split('.');
	//
	// if (!path.includes('*')) {
	// 	target[path] = value;
	//
	// 	return target;
	// }


	const types = ['wildcard', 'object', 'array', 'value', 'empty'];

	const iterator = (path, loop) => ({
		loop,
		last: loop.length === path.length,
		prev: loop === 0 ? false : loop - 1,
		next: loop === path.length ? false : loop + 1,
		left: path.length - loop
	});

	const resolve = (target, path, iteration) => ({
		wildcard: path[iteration.loop] === '*',
		prevWildcard: iteration.prev ? path[iteration.prev] === '*' : false,
		nextWildcard: iteration.next ? path[iteration.next] === '*' : false,
		target,
		path,
	});
	const structure = (target, path, value, segment, iterator, mapping) => ({
		mapping,
		path: target[path[iterator.loop]],
		prev: iterator.prev ? resolve(target, path, iterator) : false,
		next: iterator.next ? resolve(target, path, iterator) : false,
	});

	let loop = 0;
	let structures = [];
	path.forEach(segment => {
		structures[loop] = structure(target, path, value, segment, iterator(path, loop), structures);

		loop = loop+1;
	});

	return structures;

};

dataSet(example, value, 'family.mom.name');
