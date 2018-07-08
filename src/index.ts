import { Field } from 'fp-ts/lib/Field'
import { Monoid } from 'fp-ts/lib/Monoid'
import { Ord } from 'fp-ts/lib/Ord'
import { Ring } from 'fp-ts/lib/Ring'
import { Semigroup } from 'fp-ts/lib/Semigroup'
import { Semiring } from 'fp-ts/lib/Semiring'
import { Setoid } from 'fp-ts/lib/Setoid'
import { Getter, Iso } from 'monocle-ts'

export interface Newtype<URI, A> {
  _URI: URI
  _A: A
}

export type URIOf<N extends Newtype<any, any>> = N['_URI']

export type CarrierOf<N extends Newtype<any, any>> = N['_A']

/**
 * @deprecated use `CarrierOf` instead
 */
export type Carrier<N extends Newtype<any, any>> = N['_A']

export type AnyNewtype = Newtype<any, any>

/** Lifts a function operate over newtypes */
export const over = <S extends AnyNewtype, T extends AnyNewtype>(f: (a: CarrierOf<S>) => CarrierOf<T>): Getter<S, T> =>
  new Getter(f)

export const getSetoid = <S extends AnyNewtype>(S: Setoid<CarrierOf<S>>): Setoid<S> => S

export const getOrd = <S extends AnyNewtype>(O: Ord<CarrierOf<S>>): Ord<S> => O

export const getSemigroup = <S extends AnyNewtype>(S: Semigroup<CarrierOf<S>>): Semigroup<S> => S

export const getMonoid = <S extends AnyNewtype>(M: Monoid<CarrierOf<S>>): Monoid<S> => M

export const getSemiring = <S extends AnyNewtype>(S: Semiring<CarrierOf<S>>): Semiring<S> => S

export const getRing = <S extends AnyNewtype>(R: Ring<CarrierOf<S>>): Ring<S> => R

export const getField = <S extends AnyNewtype>(F: Field<CarrierOf<S>>): Field<S> => F

//
// isomorphisms
//

export const unsafeCoerce = <A, B>(a: A): B => a as any

const anyIso = new Iso<any, any>(unsafeCoerce, unsafeCoerce)

export const iso = <S extends AnyNewtype>(): Iso<S, CarrierOf<S>> => anyIso
