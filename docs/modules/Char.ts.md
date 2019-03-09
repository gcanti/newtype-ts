---
title: Char.ts
nav_order: 1
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Char (interface)](#char-interface)
- [prismChar (constant)](#prismchar-constant)
- [isChar (function)](#ischar-function)

---

# Char (interface)

**Signature**

```ts
export interface Char extends Newtype<URIOf<NonEmptyString> & { readonly Length: 1 }, string> {}
```

# prismChar (constant)

**Signature**

```ts
export const prismChar: Prism<string, Char> = ...
```

# isChar (function)

**Signature**

```ts
export const isChar = (s: string) => ...
```
