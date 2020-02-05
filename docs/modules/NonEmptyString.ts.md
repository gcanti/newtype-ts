---
title: NonEmptyString.ts
nav_order: 6
parent: Modules
---

# NonEmptyString overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [NonEmptyString (interface)](#nonemptystring-interface)
- [isNonEmptyString](#isnonemptystring)
- [prismNonEmptyString](#prismnonemptystring)

---

# NonEmptyString (interface)

**Signature**

```ts
export interface NonEmptyString extends Newtype<{ readonly NonEmptyString: unique symbol }, string> {}
```

Added in v0.2.0

# isNonEmptyString

**Signature**

```ts
export const isNonEmptyString = (s: string) => ...
```

Added in v0.2.0

# prismNonEmptyString

**Signature**

```ts
export const prismNonEmptyString: Prism<string, NonEmptyString> = ...
```

Added in v0.2.0
