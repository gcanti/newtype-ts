---
title: NegativeInteger.ts
nav_order: 5
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [NegativeInteger (interface)](#negativeinteger-interface)
- [prismNegativeInteger (constant)](#prismnegativeinteger-constant)
- [isNegativeInteger (function)](#isnegativeinteger-function)

---

# NegativeInteger (interface)

**Signature**

```ts
export interface NegativeInteger extends Concat<NonZero, NonPositiveInteger> {}
```

# prismNegativeInteger (constant)

**Signature**

```ts
export const prismNegativeInteger: Prism<number, NegativeInteger> = ...
```

# isNegativeInteger (function)

**Signature**

```ts
export const isNegativeInteger = (n: number) => ...
```
