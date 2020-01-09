/**
 * @since 0.2.0
 */
import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonNegativeInteger, NonNegativeInteger } from './NonNegativeInteger'
import { isNonZero, NonZero } from './NonZero'

/**
 * @since 0.2.0
 */
export interface PositiveInteger extends Concat<NonZero, NonNegativeInteger> {}

/**
 * @since 0.2.0
 */
export const isPositiveInteger = (n: number) => isNonZero(n) && isNonNegativeInteger(n)

/**
 * @since 0.2.0
 */
export const prismPositiveInteger: Prism<number, PositiveInteger> = prism<PositiveInteger>(isPositiveInteger)
