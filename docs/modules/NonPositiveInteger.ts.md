---
title: NonPositiveInteger.ts
nav_order: 10
parent: Modules
---

# NonPositiveInteger overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [NonPositiveInteger (interface)](#nonpositiveinteger-interface)
- [isNonPositiveInteger](#isnonpositiveinteger)
- [prismNonPositiveInteger](#prismnonpositiveinteger)

---

# NonPositiveInteger (interface)

**Signature**

```ts
export interface NonPositiveInteger extends Concat<NonPositive, Integer> {}
```

Added in v0.2.0

# isNonPositiveInteger

**Signature**

```ts
export const isNonPositiveInteger = (n: number) => ...
```

Added in v0.2.0

# prismNonPositiveInteger

**Signature**

```ts
export const prismNonPositiveInteger: Prism<number, NonPositiveInteger> = ...
```

Added in v0.2.0
