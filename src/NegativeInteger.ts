import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonPositiveInteger, NonPositiveInteger } from './NonPositiveInteger'
import { isNonZero, NonZero } from './NonZero'

/**
 * @since 0.2.0
 */
export interface NegativeInteger extends Concat<NonZero, NonPositiveInteger> {}

/**
 * @since 0.2.0
 */
export const isNegativeInteger = (n: number) => isNonZero(n) && isNonPositiveInteger(n)

/**
 * @since 0.2.0
 */
export const prismNegativeInteger: Prism<number, NegativeInteger> = prism<NegativeInteger>(isNegativeInteger)
