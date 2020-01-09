/**
 * @since 0.2.0
 */
import { Field } from 'fp-ts/lib/Field'
import { identity, Predicate, unsafeCoerce } from 'fp-ts/lib/function'
import { Monoid } from 'fp-ts/lib/Monoid'
import { none, some } from 'fp-ts/lib/Option'
import { Ord } from 'fp-ts/lib/Ord'
import { Ring } from 'fp-ts/lib/Ring'
import { Semigroup } from 'fp-ts/lib/Semigroup'
import { Semiring } from 'fp-ts/lib/Semiring'
import { Eq } from 'fp-ts/lib/Eq'
import { Iso, Prism } from 'monocle-ts'

/**
 * @since 0.2.0
 */
export interface Newtype<URI, A> {
  readonly _URI: URI
  readonly _A: A
}

/**
 * @since 0.2.0
 */
export type AnyNewtype = Newtype<any, any>

/**
 * @since 0.2.0
 */
export type URIOf<N extends AnyNewtype> = N['_URI']

/**
 * @since 0.2.0
 */
export type CarrierOf<N extends AnyNewtype> = N['_A']

/**
 * @since 0.3.0
 */
export const getEq = <S extends AnyNewtype>(S: Eq<CarrierOf<S>>): Eq<S> => S

/**
 * @since 0.2.0
 */
export const getOrd = <S extends AnyNewtype>(O: Ord<CarrierOf<S>>): Ord<S> => O

/**
 * @since 0.2.0
 */
export const getSemigroup = <S extends AnyNewtype>(S: Semigroup<CarrierOf<S>>): Semigroup<S> => S

/**
 * @since 0.2.0
 */
export const getMonoid = <S extends AnyNewtype>(M: Monoid<CarrierOf<S>>): Monoid<S> => M

/**
 * @since 0.2.0
 */
export const getSemiring = <S extends AnyNewtype>(S: Semiring<CarrierOf<S>>): Semiring<S> => S

/**
 * @since 0.2.0
 */
export const getRing = <S extends AnyNewtype>(R: Ring<CarrierOf<S>>): Ring<S> => R

/**
 * @since 0.2.0
 */
export const getField = <S extends AnyNewtype>(F: Field<CarrierOf<S>>): Field<S> => F

//
// isos
//

const anyIso = new Iso<any, any>(unsafeCoerce, unsafeCoerce)

/**
 * @since 0.2.0
 */
export function iso<S extends AnyNewtype>(): Iso<S, CarrierOf<S>> {
  return anyIso
}

//
// prisms
//

/**
 * @since 0.2.0
 */
export interface Concat<N1 extends Newtype<object, any>, N2 extends Newtype<object, CarrierOf<N1>>>
  extends Newtype<URIOf<N1> & URIOf<N2>, CarrierOf<N1>> {}

/**
 * @since 0.2.0
 */
export interface Extends<N extends AnyNewtype, Tags extends object> extends Newtype<Tags & URIOf<N>, CarrierOf<N>> {}

/**
 * @since 0.2.0
 */
export function prism<S extends AnyNewtype>(predicate: Predicate<CarrierOf<S>>): Prism<CarrierOf<S>, S> {
  return new Prism(s => (predicate(s) ? some(s) : none), identity)
}
