const isObject = check => typeof check === 'object' && Array.isArray(check) === false;
const isArray = check => Array.isArray(check) === true;

/**
 * Get Nested Data With An Optional "*" wildcard
 */
module.exports = function (target, path = '') {
	if (path === '') {
		return target;
	}

	path = Array.isArray(path) ? path : path.split('.');

	return path.reduce((value, segment) => {
		if (segment === '*') {
			if (isArray(value)) {
				return value.reduce((list, item) => [...list, item], [])
			} else if (isObject(value)) {
				return Object.values(value);
			} else {
				return value
			}
		}

		if (isArray(value)) {
			return value.reduce((list, item) => {
				if (isObject(item)) {
					return Object.keys(item).includes(segment) ? [...list, item[segment]] : [...list];
				} else if (!isObject(item) && isArray(item)) {
					return [...list, item[segment]]
				} else {
					return [...list, item]
				}
			}, []);
		}

		if (isObject(value)) {
			return value[segment]
		}

		return value[segment] || value || null;

	}, target)
};
