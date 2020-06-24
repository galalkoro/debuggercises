# Debuggercises 

exercises/09-block-scope/2-missing-variables/README.md
## [exercises](../README.md)/[08-block-scope](../../README.md)/2-missing-variables 

> 6/19/2020, 12:47:28 AM 
>>>>>>> d7fb31e756388e12e4e0420feb6829b6993cae4b:review/08-block-scope/2-missing-variables/README.md

exercises/09-block-scope/2-missing-variables/README.md
> 6/17/2020, 2:58:31 PM 

> 6/19/2020, 12:00:58 AM 

[../README.md](../README.md)
review/08-block-scope/2-missing-variables/README.md

- [/1.js](#1js) - _incomplete_ 
- [/2.js](#2js) - _incomplete_ 
- [/3.js](#3js) - _incomplete_ 
---

## /1.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/1.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/2-missing-variables/1.js:9:16)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
exercises/09-block-scope/2-missing-variables/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 

    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
review/08-block-scope/2-missing-variables/README.md
```

```js
'use strict';

const a = 3;
let b = 3;
{
  const a = 5;
  b = a;
}
console.assert(_ === 5, 'Test 1');

```

[TOP](#debuggercises)

---

## /2.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/2.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/2-missing-variables/2.js:10:16)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
exercises/09-block-scope/2-missing-variables/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 

    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
review/08-block-scope/2-missing-variables/README.md
```

```js
'use strict';

let x = 'hi!';
let y = 'hi!';
{
  x = 'hi!';
  let y = 'bye!';
}
x = 'bye!';
console.assert(_ === 'hi!', 'Test 1');
console.assert(_ === 'bye!', 'Test 2');

```

[TOP](#debuggercises)

---

## /3.js 

> incomplete 
>
> [review source](../../../exercises/08-block-scope/2-missing-variables/3.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/08-block-scope/2-missing-variables/3.js:9:16)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
exercises/09-block-scope/2-missing-variables/README.md
    at Object.<anonymous> (  ...  /scripts/review.js:116:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
=======
    at Object.<anonymous> (  ...  /scripts/review.js:113:1) 
review/08-block-scope/2-missing-variables/README.md
```

```js
'use strict';

let m = 0;
{
  let l = 10;
  const m = 1;
  l = 0;
}
console.assert(_ === 0, 'Test 1');

```

[TOP](#debuggercises)

