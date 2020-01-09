---
title: NonZero.ts
nav_order: 11
parent: Modules
---

# NonZero overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [NonZero (interface)](#nonzero-interface)
- [prismNonZero (constant)](#prismnonzero-constant)
- [isNonZero (function)](#isnonzero-function)

---

# NonZero (interface)

**Signature**

```ts
export interface NonZero extends Newtype<{ readonly NonZero: unique symbol }, number> {}
```

Added in v0.2.0

# prismNonZero (constant)

**Signature**

```ts
export const prismNonZero: Prism<number, NonZero> = ...
```

Added in v0.2.0

# isNonZero (function)

**Signature**

```ts
export const isNonZero = (n: number) => ...
```

Added in v0.2.0
