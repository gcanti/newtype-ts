# Usage

```ts
import { Newtype, iso } from 'newtype-ts'

type Age = Newtype<'Age', number>
const ageIso = iso<Age>()

// age: Newtype<"Age", number>
const age = ageIso.wrap(43)

// n: number
const n = ageIso.unwrap(age)

declare function f(age: Age): void

f(43) // error: Argument of type '43' is not assignable to parameter of type 'Newtype<"Age", number>'
f(age)
```
