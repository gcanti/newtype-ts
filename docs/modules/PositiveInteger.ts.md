---
title: PositiveInteger.ts
nav_order: 14
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [PositiveInteger (interface)](#positiveinteger-interface)
- [prismPositiveInteger (constant)](#prismpositiveinteger-constant)
- [isPositiveInteger (function)](#ispositiveinteger-function)

---

# PositiveInteger (interface)

**Signature**

```ts
export interface PositiveInteger extends Concat<NonZero, NonNegativeInteger> {}
```

# prismPositiveInteger (constant)

**Signature**

```ts
export const prismPositiveInteger: Prism<number, PositiveInteger> = ...
```

# isPositiveInteger (function)

**Signature**

```ts
export const isPositiveInteger = (n: number) => ...
```
