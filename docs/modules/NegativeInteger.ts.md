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

Added in v0.2.0

# prismNegativeInteger (constant)

**Signature**

```ts
export const prismNegativeInteger: Prism<number, NegativeInteger> = ...
```

Added in v0.2.0

# isNegativeInteger (function)

**Signature**

```ts
export const isNegativeInteger = (n: number) => ...
```

Added in v0.2.0
