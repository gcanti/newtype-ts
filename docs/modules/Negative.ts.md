---
title: Negative.ts
nav_order: 4
parent: Modules
---

# Negative overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [Negative (interface)](#negative-interface)
- [isNegative](#isnegative)
- [prismNegative](#prismnegative)

---

# Negative (interface)

**Signature**

```ts
export interface Negative extends Concat<NonZero, NonPositive> {}
```

Added in v0.2.0

# isNegative

**Signature**

```ts
export const isNegative = (n: number) => ...
```

Added in v0.2.0

# prismNegative

**Signature**

```ts
export const prismNegative: Prism<number, Negative> = ...
```

Added in v0.2.0
