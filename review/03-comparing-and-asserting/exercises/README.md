# Debuggercises 

> 6/21/2020, 9:05:10 AM 

<<<<<<< HEAD
## [exercises](../../README.md)/[03-comparing-and-asserting](../README.md)/exercises 

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
=======
> 6/19/2020, 12:00:58 AM 

[../README.md](../README.md)

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 

>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b
---

## /1.js 

> pass 
>
> [review source](../../../exercises/03-comparing-and-asserting/exercises/1.js)

```txt
<<<<<<< HEAD
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/03-comparing-and-asserting/exercises/1.js:5:26)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
LOG: boolean  true
+ PASS: Assertion 1
LOG: boolean  true
+ PASS: Assertion 2
LOG: boolean  true
+ PASS: Assertion 3
LOG: boolean  true
+ PASS: Assertion 4
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b
```

```js
'use strict';

// replace the _'s to pass the isTrues

const isTrue1 = true === true;
console.log(typeof isTrue1, isTrue1);
console.assert(isTrue1, 'Assertion 1');

const isTrue2 = 0.0 === 0;
console.log(typeof isTrue2, isTrue2);
console.assert(isTrue2, 'Assertion 2');

const isTrue3 = false === false;
console.log(typeof isTrue3, isTrue3);
console.assert(isTrue3, 'Assertion 3');

const isTrue4 = 'null' === 'null';
console.log(typeof isTrue4, isTrue4);
console.assert(isTrue4, 'Assertion 4');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/03-comparing-and-asserting/exercises/2.js)

```txt
<<<<<<< HEAD
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/03-comparing-and-asserting/exercises/2.js:6:33)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
+ PASS: Assertion 1
+ PASS: Assertion 2
+ PASS: Assertion 3
+ PASS: Assertion 4
+ PASS: Assertion 5
+ PASS: Assertion 6
+ PASS: Assertion 7
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b
```

```js
'use strict';

// replace the _ to pass the asserts

const comparison1 = 4 === '4';
const isTrue1 = comparison1 === false;
console.assert(isTrue1, 'Assertion 1');

const comparison2 = Infinity === 'Infinity';
const isTrue2 = comparison2 === false;
console.assert(isTrue2, 'Assertion 2');

const comparison3 = 'x' === `x`;
const isTrue3 = comparison3 === true;
console.assert(isTrue3, 'Assertion 3');

const comparison4 = 'null' === 'null';
const isTrue4 = comparison4 === true;
console.assert(isTrue4, 'Assertion 4');

const comparison5 = 'null' === null;
const isTrue5 = comparison5 === false;
console.assert(isTrue5, 'Assertion 5');

const comparison6 = 0.0 === 0;
const isTrue6 = comparison6 === true;
console.assert(isTrue6, 'Assertion 6');

const comparison7 = null === undefined;
const isTrue7 = comparison7 === false;
console.assert(isTrue7, 'Assertion 7');

```

[TOP](#debuggercises)

