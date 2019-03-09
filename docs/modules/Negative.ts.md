---
title: Negative.ts
nav_order: 4
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Negative (interface)](#negative-interface)
- [prismNegative (constant)](#prismnegative-constant)
- [isNegative (function)](#isnegative-function)

---

# Negative (interface)

**Signature**

```ts
export interface Negative extends Concat<NonZero, NonPositive> {}
```

# prismNegative (constant)

**Signature**

```ts
export const prismNegative: Prism<number, Negative> = ...
```

# isNegative (function)

**Signature**

```ts
export const isNegative = (n: number) => ...
```
