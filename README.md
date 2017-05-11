# es6-deferred-promise
A deferred promise implementation on top of Promises/A+ spec.
TypeScript definition file included.

## Usage
In ES2015 JavaScript:
```javascript
const Deferred = require('es6-deferred-promise').Deferred;
const deferred = new Deferred();

deferred.promise
  .then(result => {
    console.log('Result: %s', result);
  });

// Resolving a promise
deferred.resolve('Success!');

// Rejecting a promise
deferred.reject('Failure!');
```

In TypeScript:
```typescript
import { Deferred } from 'es6-deferred-promise';

const deferred = new Deferred<string>();

deferred.promise
  .then(result => {
    console.log(result);
  });

deferred.resolve('success');
```
