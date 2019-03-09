---
title: NonPositiveInteger.ts
nav_order: 10
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [NonPositiveInteger (interface)](#nonpositiveinteger-interface)
- [prismNonPositiveInteger (constant)](#prismnonpositiveinteger-constant)
- [isNonPositiveInteger (function)](#isnonpositiveinteger-function)

---

# NonPositiveInteger (interface)

**Signature**

```ts
export interface NonPositiveInteger extends Concat<NonPositive, Integer> {}
```

# prismNonPositiveInteger (constant)

**Signature**

```ts
export const prismNonPositiveInteger: Prism<number, NonPositiveInteger> = ...
```

# isNonPositiveInteger (function)

**Signature**

```ts
export const isNonPositiveInteger = (n: number) => ...
```
