---
title: index.ts
nav_order: 2
parent: Modules
---

# index overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [Concat (interface)](#concat-interface)
- [Newtype (interface)](#newtype-interface)
- [AnyNewtype (type alias)](#anynewtype-type-alias)
- [CarrierOf (type alias)](#carrierof-type-alias)
- [Extends (type alias)](#extends-type-alias)
- [URIOf (type alias)](#uriof-type-alias)
- [getEq](#geteq)
- [getField](#getfield)
- [getMonoid](#getmonoid)
- [getOrd](#getord)
- [getRing](#getring)
- [getSemigroup](#getsemigroup)
- [getSemiring](#getsemiring)
- [iso](#iso)
- [prism](#prism)

---

# Concat (interface)

**Signature**

```ts
export interface Concat<N1 extends Newtype<object, any>, N2 extends Newtype<object, CarrierOf<N1>>>
  extends Newtype<URIOf<N1> & URIOf<N2>, CarrierOf<N1>> {}
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

# Extends (type alias)

**Signature**

```ts
export type Extends<N extends AnyNewtype, Tags extends object> = Newtype<Tags & URIOf<N>, CarrierOf<N>>
```

Added in v0.2.0

# URIOf (type alias)

**Signature**

```ts
export type URIOf<N extends AnyNewtype> = N['_URI']
```

Added in v0.2.0

# getEq

**Signature**

```ts
export const getEq = <S extends AnyNewtype>(S: Eq<CarrierOf<S>>): Eq<S> => ...
```

Added in v0.3.0

# getField

**Signature**

```ts
export const getField = <S extends AnyNewtype>(F: Field<CarrierOf<S>>): Field<S> => ...
```

Added in v0.2.0

# getMonoid

**Signature**

```ts
export const getMonoid = <S extends AnyNewtype>(M: Monoid<CarrierOf<S>>): Monoid<S> => ...
```

Added in v0.2.0

# getOrd

**Signature**

```ts
export const getOrd = <S extends AnyNewtype>(O: Ord<CarrierOf<S>>): Ord<S> => ...
```

Added in v0.2.0

# getRing

**Signature**

```ts
export const getRing = <S extends AnyNewtype>(R: Ring<CarrierOf<S>>): Ring<S> => ...
```

Added in v0.2.0

# getSemigroup

**Signature**

```ts
export const getSemigroup = <S extends AnyNewtype>(S: Semigroup<CarrierOf<S>>): Semigroup<S> => ...
```

Added in v0.2.0

# getSemiring

**Signature**

```ts
export const getSemiring = <S extends AnyNewtype>(S: Semiring<CarrierOf<S>>): Semiring<S> => ...
```

Added in v0.2.0

# iso

**Signature**

```ts
export function iso<S extends AnyNewtype>(): Iso<S, CarrierOf<S>> { ... }
```

Added in v0.2.0

# prism

**Signature**

```ts
export function prism<S extends AnyNewtype>(predicate: Predicate<CarrierOf<S>>): Prism<CarrierOf<S>, S> { ... }
```

Added in v0.2.0
