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
- [prismNonZeroInteger (constant)](#prismnonzerointeger-constant)
- [isNonZeroInteger (function)](#isnonzerointeger-function)

---

# NonZeroInteger (interface)

**Signature**

```ts
export interface NonZeroInteger extends Concat<NonZero, Integer> {}
```

Added in v0.2.0

# prismNonZeroInteger (constant)

**Signature**

```ts
export const prismNonZeroInteger: Prism<number, NonZeroInteger> = ...
```

Added in v0.2.0

# isNonZeroInteger (function)

**Signature**

```ts
export const isNonZeroInteger = (n: number) => ...
```

Added in v0.2.0
