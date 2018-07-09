import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

export interface NonZero extends Newtype<{ readonly NonZero: unique symbol }, number> {}

export const isNonZero = (n: number) => n !== 0

export const prismNonZero: Prism<number, NonZero> = prism<NonZero>(isNonZero)
