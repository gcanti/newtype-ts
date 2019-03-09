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
- [~~Carrier~~ (type alias)](#carrier-type-alias)
- [CarrierOf (type alias)](#carrierof-type-alias)
- [URIOf (type alias)](#uriof-type-alias)
- [getField (function)](#getfield-function)
- [getMonoid (function)](#getmonoid-function)
- [getOrd (function)](#getord-function)
- [getRing (function)](#getring-function)
- [getSemigroup (function)](#getsemigroup-function)
- [getSemiring (function)](#getsemiring-function)
- [getSetoid (function)](#getsetoid-function)
- [iso (function)](#iso-function)
- [over (function)](#over-function)
- [prism (function)](#prism-function)
- [unsafeCoerce (function)](#unsafecoerce-function)

---

# Concat (interface)

**Signature**

```ts
export interface Concat<N1 extends Newtype<object, any>, N2 extends Newtype<object, CarrierOf<N1>>>
  extends Newtype<URIOf<N1> & URIOf<N2>, CarrierOf<N1>> {}
```

# Extends (interface)

**Signature**

```ts
export interface Extends<N extends AnyNewtype, Tags extends object> extends Newtype<Tags & URIOf<N>, CarrierOf<N>> {}
```

# Newtype (interface)

**Signature**

```ts
export interface Newtype<URI, A> {
  readonly _URI: URI
  readonly _A: A
}
```

# AnyNewtype (type alias)

**Signature**

```ts
export type AnyNewtype = Newtype<any, any>
```

# ~~Carrier~~ (type alias)

**Signature**

```ts
export type Carrier<N extends Newtype<any, any>> = N['_A']
```

# CarrierOf (type alias)

**Signature**

```ts
export type CarrierOf<N extends AnyNewtype> = N['_A']
```

# URIOf (type alias)

**Signature**

```ts
export type URIOf<N extends AnyNewtype> = N['_URI']
```

# getField (function)

**Signature**

```ts
export const getField = <S extends AnyNewtype>(F: Field<CarrierOf<S>>): Field<S> => ...
```

# getMonoid (function)

**Signature**

```ts
export const getMonoid = <S extends AnyNewtype>(M: Monoid<CarrierOf<S>>): Monoid<S> => ...
```

# getOrd (function)

**Signature**

```ts
export const getOrd = <S extends AnyNewtype>(O: Ord<CarrierOf<S>>): Ord<S> => ...
```

# getRing (function)

**Signature**

```ts
export const getRing = <S extends AnyNewtype>(R: Ring<CarrierOf<S>>): Ring<S> => ...
```

# getSemigroup (function)

**Signature**

```ts
export const getSemigroup = <S extends AnyNewtype>(S: Semigroup<CarrierOf<S>>): Semigroup<S> => ...
```

# getSemiring (function)

**Signature**

```ts
export const getSemiring = <S extends AnyNewtype>(S: Semiring<CarrierOf<S>>): Semiring<S> => ...
```

# getSetoid (function)

**Signature**

```ts
export const getSetoid = <S extends AnyNewtype>(S: Setoid<CarrierOf<S>>): Setoid<S> => ...
```

# iso (function)

**Signature**

```ts
export const iso = <S extends AnyNewtype>(): Iso<S, CarrierOf<S>> => ...
```

# over (function)

Lifts a function operate over newtypes

**Signature**

```ts
export const over = <S extends AnyNewtype, T extends AnyNewtype>(f: (a: CarrierOf<S>) => CarrierOf<T>): Getter<S, T> => ...
```

# prism (function)

**Signature**

```ts
export const prism = <S extends AnyNewtype>(predicate: Predicate<CarrierOf<S>>): Prism<CarrierOf<S>, S> => ...
```

# unsafeCoerce (function)

**Signature**

```ts
export const unsafeCoerce = <A, B>(a: A): B => ...
```
