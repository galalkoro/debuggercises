# Debuggercises 

> 6/25/2020, 5:16:08 PM 

## [exercises](../../README.md)/[14-increment-and-decrement](../README.md)/exercises 

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
- [/3.js](#3js) - _incomplete_ 
---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/14-increment-and-decrement/exercises/1.js:6:22)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:159:1) 
```

```js
'use strict';

let x = 0;

let y = ++x;
console.assert(x === _, 'Test 1 x');
console.assert(y === _, 'Test 1 y');

x = y--;
console.assert(x === _, 'Test 2 x');
console.assert(y === _, 'Test 2 y');

let z = x++;
console.assert(x === _, 'Test 3 x');
console.assert(y === _, 'Test 3 y');
console.assert(z === _, 'Test 3 z');

y = --x;
console.assert(x === _, 'Test 4 x');
console.assert(y === _, 'Test 4 y');
console.assert(z === _, 'Test 4 z');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/14-increment-and-decrement/exercises/2.js:6:22)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:159:1) 
```

```js
'use strict';

let x = 0;

let y = x--;
console.assert(x === _, 'Test 1 x');
console.assert(y === _, 'Test 1 y');

x = ++y;
console.assert(x === _, 'Test 2 x');
console.assert(y === _, 'Test 2 y');

let z = y++;
console.assert(x === _, 'Test 3 x');
console.assert(y === _, 'Test 3 y');
console.assert(z === _, 'Test 3 z');

x = --z;
console.assert(x === _, 'Test 4 x');
console.assert(y === _, 'Test 4 y');
console.assert(z === _, 'Test 4 z');

```

[TOP](#debuggercises)

---

## /3.js 

> incomplete 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/3.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/14-increment-and-decrement/exercises/3.js:9:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:159:1) 
```

```js
'use strict';

let x = 0;

let y = x--;
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = _;
console.assert(x === 0, 'Test 2 x');
console.assert(y === -1, 'Test 2 y');

let z = _;
console.assert(x === 1, 'Test 3 x');
console.assert(y === -1, 'Test 3 y');
console.assert(z === 0, 'Test 3 z');

_ = --z;
console.assert(x === 1, 'Test 4 x');
console.assert(y === -1, 'Test 4 y');
console.assert(z === -1, 'Test 4 z');

```

[TOP](#debuggercises)

