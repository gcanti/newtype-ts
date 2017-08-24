import { Iso, Getter } from 'monocle-ts';
import { Setoid } from 'fp-ts/lib/Setoid';
import { Ord } from 'fp-ts/lib/Ord';
import { Monoid } from 'fp-ts/lib/Monoid';
import { Semigroup } from 'fp-ts/lib/Semigroup';
import { Semiring } from 'fp-ts/lib/Semiring';
import { Ring } from 'fp-ts/lib/Ring';
import { Field } from 'fp-ts/lib/Field';
export interface Newtype<URI extends string, A> {
    _URI: URI;
    _A: A;
}
export declare type Carrier<N extends Newtype<any, any>> = N['_A'];
export declare type AnyNewtype = Newtype<any, any>;
export declare const iso: <S extends Newtype<any, any>>() => Iso<S, S["_A"]>;
/** Lifts a function operate over newtypes */
export declare const over: <S extends Newtype<any, any>, T extends Newtype<any, any>>(f: (a: S["_A"]) => T["_A"]) => Getter<S, T>;
export declare const getSetoid: <S extends Newtype<any, any>>(S: Setoid<S["_A"]>) => Setoid<S>;
export declare const getOrd: <S extends Newtype<any, any>>(O: Ord<S["_A"]>) => Ord<S>;
export declare const getSemigroup: <S extends Newtype<any, any>>(S: Semigroup<S["_A"]>) => Semigroup<S>;
export declare const getMonoid: <S extends Newtype<any, any>>(M: Monoid<S["_A"]>) => Monoid<S>;
export declare const getSemiring: <S extends Newtype<any, any>>(S: Semiring<S["_A"]>) => Semiring<S>;
export declare const getRing: <S extends Newtype<any, any>>(R: Ring<S["_A"]>) => Ring<S>;
export declare const getField: <S extends Newtype<any, any>>(F: Field<S["_A"]>) => Field<S>;
