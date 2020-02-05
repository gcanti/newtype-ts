---
title: PositiveInteger.ts
nav_order: 14
parent: Modules
---

# PositiveInteger overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [PositiveInteger (interface)](#positiveinteger-interface)
- [isPositiveInteger](#ispositiveinteger)
- [prismPositiveInteger](#prismpositiveinteger)

---

# PositiveInteger (interface)

**Signature**

```ts
export interface PositiveInteger extends Concat<NonZero, NonNegativeInteger> {}
```

Added in v0.2.0

# isPositiveInteger

**Signature**

```ts
export const isPositiveInteger = (n: number) => ...
```

Added in v0.2.0

# prismPositiveInteger

**Signature**

```ts
export const prismPositiveInteger: Prism<number, PositiveInteger> = ...
```

Added in v0.2.0
