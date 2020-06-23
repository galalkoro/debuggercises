# Debuggercises 

> 6/24/2020, 12:09:52 AM 

## [exercises](../../README.md)/[09-block-scope](../README.md)/1-missing-values 

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/09-block-scope/1-missing-values/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/1-missing-values/1.js:4:22)
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

const a = 3;
console.assert(a === _, 'Test 1');
{
  const a = 5;
  console.assert(a === _, 'Test 2');
}
console.assert(a === _, 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/09-block-scope/1-missing-values/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/1-missing-values/2.js:4:22)
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

let x = 3;
console.assert(x === _, 'Test 1: x');
{
  x = 10;
  const y = 5;

  console.assert(x === _, 'Test 2: x');
  console.assert(y === _, 'Test 3: y');
}
console.assert(x === _, 'Test 4: x');

```

[TOP](#debuggercises)

