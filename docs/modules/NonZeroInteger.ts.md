---
title: NonZeroInteger.ts
nav_order: 12
parent: Modules
---

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

# prismNonZeroInteger (constant)

**Signature**

```ts
export const prismNonZeroInteger: Prism<number, NonZeroInteger> = ...
```

# isNonZeroInteger (function)

**Signature**

```ts
export const isNonZeroInteger = (n: number) => ...
```
