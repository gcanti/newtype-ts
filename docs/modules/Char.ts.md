---
title: Char.ts
nav_order: 1
parent: Modules
---

# Char overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [Char (interface)](#char-interface)
- [isChar](#ischar)
- [prismChar](#prismchar)

---

# Char (interface)

**Signature**

```ts
export interface Char extends Newtype<URIOf<NonEmptyString> & { readonly Length: 1 }, string> {}
```

Added in v0.2.0

# isChar

**Signature**

```ts
export const isChar = (s: string) => ...
```

Added in v0.2.0

# prismChar

**Signature**

```ts
export const prismChar: Prism<string, Char> = ...
```

Added in v0.2.0
