'use strict';

const scramble = (param1, param2, param3) => {
	return `${param1}${param3}${param2}`;
};

const _1_expect = 'cab';
const _1_arg_1 = _;
const _1_arg_2 = _;
const _1_arg_3 = _;
const _1_actual = scramble(_1_arg_1, _1_arg_2, _1_arg_3);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'abc';
const _2_arg_1 = 'c';
const _2_arg_2 = 'b';
const _2_arg_3 = 'a';
const _2_actual = scramble(_, _, _);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'abc';
const _3_arg_1 = 'b';
const _3_arg_2 = 'a';
const _3_arg_3 = 'c';
const _3_actual = scramble(_, _, _);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'cba';
const _4_arg_1 = _;
const _4_arg_2 = _;
const _4_arg_3 = _;
const _4_actual = scramble(_4_arg_1, _4_arg_2, _4_arg_3);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'abc';
const _5_arg_1 = 'c';
const _5_arg_2 = 'a';
const _5_arg_3 = 'b';
const _5_actual = scramble(_, _, _);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'bac';
const _6_arg_1 = _;
const _6_arg_2 = _;
const _6_arg_3 = _;
const _6_actual = scramble(_6_arg_1, _6_arg_2, _6_arg_3);
console.assert(_6_actual === _6_expect, 'Test 6');

function mystery(a, b) {
	let result = '';
	if (typeof a === b) {
		result = 'path 1';
	} else if (a === typeof b) {
		result = 'path 2';
	} else {
		result = 'path 3';
	}
	return result;
}

const _1_expect = 'path 1';
const _1_actual = mystery(true, 'boolean');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(NaN, 'number');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery(null, 'object');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery('boolean', false);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery('undefined', undefined);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery('boolean', true);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'path 3';
const _7_actual = mystery(4, 3);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(3, 3.0);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery('Dag', 'bounjour');
console.assert(_9_actual === _9_expect, 'Test 9');
