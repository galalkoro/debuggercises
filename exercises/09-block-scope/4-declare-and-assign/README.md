# Debuggercises 

<<<<<<< HEAD:exercises/09-block-scope/4-declare-and-assign/README.md
## [exercises](../README.md)/[08-block-scope](../../README.md)/4-declare-and-assign 
=======
> 6/19/2020, 12:47:28 AM 
>>>>>>> d7fb31e756388e12e4e0420feb6829b6993cae4b:review/08-block-scope/4-declare-and-assign/README.md

<<<<<<< HEAD:exercises/09-block-scope/4-declare-and-assign/README.md
> 6/17/2020, 2:58:31 PM 
=======
> 6/19/2020, 12:00:58 AM 

[../README.md](../README.md)
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/4-declare-and-assign/README.md

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
- [/3.js](#3js) - _incomplete_ 
---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/4-declare-and-assign/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/4-declare-and-assign/1.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
<<<<<<< HEAD:exercises/09-block-scope/4-declare-and-assign/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/4-declare-and-assign/README.md
```

```js
'use strict';

_;
console.assert(a === false, 'Test 1');
{
  _;
  console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/4-declare-and-assign/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/4-declare-and-assign/2.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
<<<<<<< HEAD:exercises/09-block-scope/4-declare-and-assign/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/4-declare-and-assign/README.md
```

```js
'use strict';

_;
console.assert(x === 'hi!', 'Test 1: x');
{
  _;
  _;

  console.assert(x === 'bye!', 'Test 2: x');
  console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');

```

[TOP](#debuggercises)

---

## /3.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/4-declare-and-assign/3.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/4-declare-and-assign/3.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
<<<<<<< HEAD:exercises/09-block-scope/4-declare-and-assign/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/4-declare-and-assign/README.md
```

```js
'use strict';

_;
console.assert(m === 1, 'Test 1: m');
{
  _;
  _;
  console.assert(m === 2, 'Test 2: m');
  console.assert(l === 3, 'Test 3: l');
}
_;
console.assert(m === 4, 'Test 4: m');

```

[TOP](#debuggercises)

