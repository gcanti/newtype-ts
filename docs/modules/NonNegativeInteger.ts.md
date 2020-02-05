---
title: NonNegativeInteger.ts
nav_order: 8
parent: Modules
---

# NonNegativeInteger overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [NonNegativeInteger (interface)](#nonnegativeinteger-interface)
- [isNonNegativeInteger](#isnonnegativeinteger)
- [prismNonNegativeInteger](#prismnonnegativeinteger)

---

# NonNegativeInteger (interface)

**Signature**

```ts
export interface NonNegativeInteger extends Concat<NonNegative, Integer> {}
```

Added in v0.2.0

# isNonNegativeInteger

**Signature**

```ts
export const isNonNegativeInteger = (n: number) => ...
```

Added in v0.2.0

# prismNonNegativeInteger

**Signature**

```ts
export const prismNonNegativeInteger: Prism<number, NonNegativeInteger> = ...
```

Added in v0.2.0
