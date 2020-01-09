---
title: Integer.ts
nav_order: 3
parent: Modules
---

# Integer overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [Integer (interface)](#integer-interface)
- [prismInteger (constant)](#prisminteger-constant)
- [isInteger (function)](#isinteger-function)

---

# Integer (interface)

**Signature**

```ts
export interface Integer extends Newtype<{ readonly Integer: unique symbol }, number> {}
```

Added in v0.2.0

# prismInteger (constant)

**Signature**

```ts
export const prismInteger: Prism<number, Integer> = ...
```

Added in v0.2.0

# isInteger (function)

**Signature**

```ts
export const isInteger = (n: number) => ...
```

Added in v0.2.0
