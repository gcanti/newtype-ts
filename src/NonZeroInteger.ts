/**
 * @since 0.2.0
 */
import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { Integer, isInteger } from './Integer'
import { isNonZero, NonZero } from './NonZero'

/**
 * @since 0.2.0
 */
export interface NonZeroInteger extends Concat<NonZero, Integer> {}

/**
 * @since 0.2.0
 */
export const isNonZeroInteger = (n: number) => isNonZero(n) && isInteger(n)

/**
 * @since 0.2.0
 */
export const prismNonZeroInteger: Prism<number, NonZeroInteger> = prism<NonZeroInteger>(isNonZeroInteger)
