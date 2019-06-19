---
title: NonEmptyString.ts
nav_order: 6
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [NonEmptyString (interface)](#nonemptystring-interface)
- [prismNonEmptyString (constant)](#prismnonemptystring-constant)
- [isNonEmptyString (function)](#isnonemptystring-function)

---

# NonEmptyString (interface)

**Signature**

```ts
export interface NonEmptyString extends Newtype<{ readonly NonEmptyString: unique symbol }, string> {}
```

Added in v0.2.0

# prismNonEmptyString (constant)

**Signature**

```ts
export const prismNonEmptyString: Prism<string, NonEmptyString> = ...
```

Added in v0.2.0

# isNonEmptyString (function)

**Signature**

```ts
export const isNonEmptyString = (s: string) => ...
```

Added in v0.2.0
