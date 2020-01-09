/**
 * @since 0.2.0
 */
import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonPositive, NonPositive } from './NonPositive'
import { isNonZero, NonZero } from './NonZero'

/**
 * @since 0.2.0
 */
export interface Negative extends Concat<NonZero, NonPositive> {}

/**
 * @since 0.2.0
 */
export const isNegative = (n: number) => isNonZero(n) && isNonPositive(n)

/**
 * @since 0.2.0
 */
export const prismNegative: Prism<number, Negative> = prism<Negative>(isNegative)
