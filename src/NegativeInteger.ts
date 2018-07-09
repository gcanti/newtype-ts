import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonPositiveInteger, NonPositiveInteger } from './NonPositiveInteger'
import { isNonZero, NonZero } from './NonZero'

export interface NegativeInteger extends Concat<NonZero, NonPositiveInteger> {}

export const isNegativeInteger = (n: number) => isNonZero(n) && isNonPositiveInteger(n)

export const prismNegativeInteger: Prism<number, NegativeInteger> = prism<NegativeInteger>(isNegativeInteger)
