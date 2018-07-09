import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonNegativeInteger, NonNegativeInteger } from './NonNegativeInteger'
import { isNonZero, NonZero } from './NonZero'

export interface PositiveInteger extends Concat<NonZero, NonNegativeInteger> {}

export const isPositiveInteger = (n: number) => isNonZero(n) && isNonNegativeInteger(n)

export const prismPositiveInteger: Prism<number, PositiveInteger> = prism<PositiveInteger>(isPositiveInteger)
