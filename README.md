# Usage

```ts
import { Newtype, iso } from 'newtype-ts'

interface EUR extends Newtype<'EUR', number> {}

// eurIso: Iso<EUR, number>
const eurIso = iso<EUR>()

// eur: EUR
const eur = eurIso.wrap(2)

// n: number
export const n = eurIso.unwrap(eur)

declare function f(eur: EUR): void

f(2) // Argument of type '2' is not assignable to parameter of type 'EUR'
f(eur) // ok
```

For the `Iso` type, see [monocle-ts](https://github.com/gcanti/monocle-ts) documentation.

## Performance

```ts
const double = n => n * 2
const doubleEUR = eurIso.modify(double)
```

Test `double(2)` vs `doubleEUR(eurIso.wrap(2))`

Results

```
double x 538,301,203 ops/sec ±0.45% (87 runs sampled)
doubleEUR x 536,575,600 ops/sec ±0.27% (87 runs sampled)
```

## Lift a function

```ts
const double = (n: number): number => n * 2

// doubleEUR: (s: EUR) => EUR
const doubleEUR = eurIso.modify(double)
```

## Operate over newtypes

```ts
import { over } from 'newtype-ts'

interface USD extends Newtype<'USD', number> {}

const USDFromEUR = (n: number): number => n * 1.18

// getter: Getter<EUR, USD>
const getter = over<EUR, USD>(USDFromEUR)

// usd: USD
const usd = getter.get(eur)
```

For the `Getter` type, see [monocle-ts](https://github.com/gcanti/monocle-ts) documentation.
