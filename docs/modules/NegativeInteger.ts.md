---
title: NegativeInteger.ts
nav_order: 5
parent: Modules
---

# NegativeInteger overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [NegativeInteger (interface)](#negativeinteger-interface)
- [isNegativeInteger](#isnegativeinteger)
- [prismNegativeInteger](#prismnegativeinteger)

---

# NegativeInteger (interface)

**Signature**

```ts
export interface NegativeInteger extends Concat<NonZero, NonPositiveInteger> {}
```

Added in v0.2.0

# isNegativeInteger

**Signature**

```ts
export const isNegativeInteger = (n: number) => ...
```

Added in v0.2.0

# prismNegativeInteger

**Signature**

```ts
export const prismNegativeInteger: Prism<number, NegativeInteger> = ...
```

Added in v0.2.0
