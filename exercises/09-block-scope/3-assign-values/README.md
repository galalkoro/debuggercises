# Debuggercises 

<<<<<<< HEAD:exercises/09-block-scope/3-assign-values/README.md
## [exercises](../README.md)/[08-block-scope](../../README.md)/3-assign-values 
=======
> 6/19/2020, 12:47:28 AM 
>>>>>>> d7fb31e756388e12e4e0420feb6829b6993cae4b:review/08-block-scope/3-assign-values/README.md

<<<<<<< HEAD:exercises/09-block-scope/3-assign-values/README.md
> 6/17/2020, 2:58:31 PM 
=======
> 6/19/2020, 12:00:58 AM 

[../README.md](../README.md)
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/3-assign-values/README.md

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
- [/3.js](#3js) - _incomplete_ 
---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/3-assign-values/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/3-assign-values/1.js:3:11)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
<<<<<<< HEAD:exercises/09-block-scope/3-assign-values/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/3-assign-values/README.md
```

```js
'use strict';

const a = _;
console.assert(a === '12', 'Test 1');
{
  const a = _;
  console.assert(a === true, 'Test 2');
}
console.assert(a === '12', 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/3-assign-values/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/3-assign-values/2.js:3:9)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
<<<<<<< HEAD:exercises/09-block-scope/3-assign-values/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/3-assign-values/README.md
```

```js
'use strict';

let x = _;
console.assert(x === null, 'Test 1: x');
{
  x = _;
  const y = _;

  console.assert(x === false, 'Test 2: x');
  console.assert(y === null, 'Test 3: y');
}
console.assert(x === false, 'Test 4: x');

```

[TOP](#debuggercises)

---

## /3.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/3-assign-values/3.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/3-assign-values/3.js:3:9)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
<<<<<<< HEAD:exercises/09-block-scope/3-assign-values/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
>>>>>>> da31acffc079dde44edf60eda7b6176a9e5fc09b:review/08-block-scope/3-assign-values/README.md
```

```js
'use strict';

let m = _;
console.assert(m === 'tall', 'Test 1: m');
{
  let l = _;
  const m = _;
  l = _;
  console.assert(m === 'short', 'Test 2: m');
  console.assert(l === 'mini', 'Test 3: l');
}
m = _;
console.assert(m === 'medium', 'Test 4: m');

```

[TOP](#debuggercises)

