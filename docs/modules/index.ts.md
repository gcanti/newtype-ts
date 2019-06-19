---
title: index.ts
nav_order: 2
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Concat (interface)](#concat-interface)
- [Extends (interface)](#extends-interface)
- [Newtype (interface)](#newtype-interface)
- [AnyNewtype (type alias)](#anynewtype-type-alias)
- [CarrierOf (type alias)](#carrierof-type-alias)
- [URIOf (type alias)](#uriof-type-alias)
- [getEq (function)](#geteq-function)
- [getField (function)](#getfield-function)
- [getMonoid (function)](#getmonoid-function)
- [getOrd (function)](#getord-function)
- [getRing (function)](#getring-function)
- [getSemigroup (function)](#getsemigroup-function)
- [getSemiring (function)](#getsemiring-function)
- [iso (function)](#iso-function)
- [prism (function)](#prism-function)

---

# Concat (interface)

**Signature**

```ts
export interface Concat<N1 extends Newtype<object, any>, N2 extends Newtype<object, CarrierOf<N1>>>
  extends Newtype<URIOf<N1> & URIOf<N2>, CarrierOf<N1>> {}
```

Added in v0.2.0

# Extends (interface)

**Signature**

```ts
export interface Extends<N extends AnyNewtype, Tags extends object> extends Newtype<Tags & URIOf<N>, CarrierOf<N>> {}
```

Added in v0.2.0

# Newtype (interface)

**Signature**

```ts
export interface Newtype<URI, A> {
  readonly _URI: URI
  readonly _A: A
}
```

Added in v0.2.0

# AnyNewtype (type alias)

**Signature**

```ts
export type AnyNewtype = Newtype<any, any>
```

Added in v0.2.0

# CarrierOf (type alias)

**Signature**

```ts
export type CarrierOf<N extends AnyNewtype> = N['_A']
```

Added in v0.2.0

# URIOf (type alias)

**Signature**

```ts
export type URIOf<N extends AnyNewtype> = N['_URI']
```

Added in v0.2.0

# getEq (function)

**Signature**

```ts
export const getEq = <S extends AnyNewtype>(S: Eq<CarrierOf<S>>): Eq<S> => ...
```

Added in v0.3.0

# getField (function)

**Signature**

```ts
export const getField = <S extends AnyNewtype>(F: Field<CarrierOf<S>>): Field<S> => ...
```

Added in v0.2.0

# getMonoid (function)

**Signature**

```ts
export const getMonoid = <S extends AnyNewtype>(M: Monoid<CarrierOf<S>>): Monoid<S> => ...
```

Added in v0.2.0

# getOrd (function)

**Signature**

```ts
export const getOrd = <S extends AnyNewtype>(O: Ord<CarrierOf<S>>): Ord<S> => ...
```

Added in v0.2.0

# getRing (function)

**Signature**

```ts
export const getRing = <S extends AnyNewtype>(R: Ring<CarrierOf<S>>): Ring<S> => ...
```

Added in v0.2.0

# getSemigroup (function)

**Signature**

```ts
export const getSemigroup = <S extends AnyNewtype>(S: Semigroup<CarrierOf<S>>): Semigroup<S> => ...
```

Added in v0.2.0

# getSemiring (function)

**Signature**

```ts
export const getSemiring = <S extends AnyNewtype>(S: Semiring<CarrierOf<S>>): Semiring<S> => ...
```

Added in v0.2.0

# iso (function)

**Signature**

```ts
export function iso<S extends AnyNewtype>(): Iso<S, CarrierOf<S>> { ... }
```

Added in v0.2.0

# prism (function)

**Signature**

```ts
export function prism<S extends AnyNewtype>(predicate: Predicate<CarrierOf<S>>): Prism<CarrierOf<S>, S> { ... }
```

Added in v0.2.0
