---
title: Positive.ts
nav_order: 13
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Positive (interface)](#positive-interface)
- [prismPositive (constant)](#prismpositive-constant)
- [isPositive (function)](#ispositive-function)

---

# Positive (interface)

**Signature**

```ts
export interface Positive extends Concat<NonZero, NonNegative> {}
```

# prismPositive (constant)

**Signature**

```ts
export const prismPositive: Prism<number, Positive> = ...
```

# isPositive (function)

**Signature**

```ts
export const isPositive = (n: number) => ...
```
