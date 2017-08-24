import { Iso, Getter } from 'monocle-ts'
import { Setoid } from 'fp-ts/lib/Setoid'
import { Ord } from 'fp-ts/lib/Ord'
import { Monoid } from 'fp-ts/lib/Monoid'
import { Semigroup } from 'fp-ts/lib/Semigroup'
import { Semiring } from 'fp-ts/lib/Semiring'
import { Ring } from 'fp-ts/lib/Ring'
import { Field } from 'fp-ts/lib/Field'

const unsafeCoerce = <A, B>(a: A): B => a as any

export interface Newtype<URI extends string, A> {
  _URI: URI
  _A: A
}

export type Carrier<N extends Newtype<any, any>> = N['_A']

export type AnyNewtype = Newtype<any, any>

export const iso = <S extends AnyNewtype>(): Iso<S, Carrier<S>> => new Iso<S, Carrier<S>>(unsafeCoerce, unsafeCoerce)

/** Lifts a function operate over newtypes */
export const over = <S extends AnyNewtype, T extends AnyNewtype>(f: (a: Carrier<S>) => Carrier<T>): Getter<S, T> =>
  new Getter(f)

export const getSetoid = <S extends AnyNewtype>(S: Setoid<Carrier<S>>): Setoid<S> => S

export const getOrd = <S extends AnyNewtype>(O: Ord<Carrier<S>>): Ord<S> => O

export const getSemigroup = <S extends AnyNewtype>(S: Semigroup<Carrier<S>>): Semigroup<S> => S

export const getMonoid = <S extends AnyNewtype>(M: Monoid<Carrier<S>>): Monoid<S> => M

export const getSemiring = <S extends AnyNewtype>(S: Semiring<Carrier<S>>): Semiring<S> => S

export const getRing = <S extends AnyNewtype>(R: Ring<Carrier<S>>): Ring<S> => R

export const getField = <S extends AnyNewtype>(F: Field<Carrier<S>>): Field<S> => F
