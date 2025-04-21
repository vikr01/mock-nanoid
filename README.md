# mock-nanoid

Simple module meant to mock nanoid methods in a deterministic, sequential way for testing purposes.

```
import { nanoid } from 'nanoid'

nanoid(5); // "V1StG"
```

Now you would do:
```
import { mockNanoid as nanoid } from 'mock-nanoid';

nanoid(5); // '00000'
nanoid(5); // '00001'

nanoid(3); // '000'
nanoid(3); // '001'

nanoid.resetMock(5); // clears only length 5

nanoid(3); // '002'
nanoid(5); // '00002'
```

For mocks not yet built, we just re-export nanoid's functions.
