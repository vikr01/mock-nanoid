# mock-nanoid

Simple module meant to mock nanoid methods in a deterministic, sequential way for testing purposes.

```js
import { nanoid } from 'nanoid/non-secure'

nanoid(5); // "V1StG"
```

Now you would do:
```js
import { mockNanoid as nanoid } from 'mock-nanoid/non-secure';

nanoid(5); // '00000'
nanoid(5); // '00001'

nanoid(3); // '000'
nanoid(3); // '001'

nanoid.resetMock(5); // clears only length 5

nanoid(3); // '002'
nanoid(5); // '00002'
```

For mocks not yet built, we just re-export nanoid's functions.

To do this in jest:
```js
// jest.config.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
   // ...your configurations here
    moduleNameMapper: {
        // ...your other mocks here
        'nanoid': require.resolve('mock-nanoid'),
        'nanoid/non-secure': require.resolve('mock-nanoid/non-secure'),
    },
};
```
