---
title: NonZeroInteger.ts
nav_order: 12
parent: Modules
---

# NonZeroInteger overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [NonZeroInteger (interface)](#nonzerointeger-interface)
- [isNonZeroInteger](#isnonzerointeger)
- [prismNonZeroInteger](#prismnonzerointeger)

---

# NonZeroInteger (interface)

**Signature**

```ts
export interface NonZeroInteger extends Concat<NonZero, Integer> {}
```

Added in v0.2.0

# isNonZeroInteger

**Signature**

```ts
export const isNonZeroInteger = (n: number) => ...
```

Added in v0.2.0

# prismNonZeroInteger

**Signature**

```ts
export const prismNonZeroInteger: Prism<number, NonZeroInteger> = ...
```

Added in v0.2.0
