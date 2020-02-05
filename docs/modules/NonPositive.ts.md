---
title: NonPositive.ts
nav_order: 9
parent: Modules
---

# NonPositive overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [NonPositive (interface)](#nonpositive-interface)
- [isNonPositive](#isnonpositive)
- [prismNonPositive](#prismnonpositive)

---

# NonPositive (interface)

**Signature**

```ts
export interface NonPositive extends Newtype<{ readonly NonPositive: unique symbol }, number> {}
```

Added in v0.2.0

# isNonPositive

**Signature**

```ts
export const isNonPositive = (n: number) => ...
```

Added in v0.2.0

# prismNonPositive

**Signature**

```ts
export const prismNonPositive: Prism<number, NonPositive> = ...
```

Added in v0.2.0
