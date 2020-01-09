/**
 * @since 0.2.0
 */
import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonNegative, NonNegative } from './NonNegative'
import { isNonZero, NonZero } from './NonZero'

/**
 * @since 0.2.0
 */
export interface Positive extends Concat<NonZero, NonNegative> {}

/**
 * @since 0.2.0
 */
export const isPositive = (n: number) => isNonZero(n) && isNonNegative(n)

/**
 * @since 0.2.0
 */
export const prismPositive: Prism<number, Positive> = prism<Positive>(isPositive)
