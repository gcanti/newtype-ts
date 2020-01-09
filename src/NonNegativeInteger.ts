/**
 * @since 0.2.0
 */
import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { Integer, isInteger } from './Integer'
import { isNonNegative, NonNegative } from './NonNegative'

/**
 * @since 0.2.0
 */
export interface NonNegativeInteger extends Concat<NonNegative, Integer> {}

/**
 * @since 0.2.0
 */
export const isNonNegativeInteger = (n: number) => isNonNegative(n) && isInteger(n)

/**
 * @since 0.2.0
 */
export const prismNonNegativeInteger: Prism<number, NonNegativeInteger> = prism<NonNegativeInteger>(
  isNonNegativeInteger
)
