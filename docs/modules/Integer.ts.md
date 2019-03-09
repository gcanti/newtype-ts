---
title: Integer.ts
nav_order: 3
parent: Modules
---

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

# prismInteger (constant)

**Signature**

```ts
export const prismInteger: Prism<number, Integer> = ...
```

# isInteger (function)

**Signature**

```ts
export const isInteger = (n: number) => ...
```
