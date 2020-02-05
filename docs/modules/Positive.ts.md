---
title: Positive.ts
nav_order: 13
parent: Modules
---

# Positive overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [Positive (interface)](#positive-interface)
- [isPositive](#ispositive)
- [prismPositive](#prismpositive)

---

# Positive (interface)

**Signature**

```ts
export interface Positive extends Concat<NonZero, NonNegative> {}
```

Added in v0.2.0

# isPositive

**Signature**

```ts
export const isPositive = (n: number) => ...
```

Added in v0.2.0

# prismPositive

**Signature**

```ts
export const prismPositive: Prism<number, Positive> = ...
```

Added in v0.2.0
