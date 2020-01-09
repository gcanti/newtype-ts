/**
 * @since 0.2.0
 */
import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { Integer, isInteger } from './Integer'
import { isNonPositive, NonPositive } from './NonPositive'

/**
 * @since 0.2.0
 */
export interface NonPositiveInteger extends Concat<NonPositive, Integer> {}

/**
 * @since 0.2.0
 */
export const isNonPositiveInteger = (n: number) => isNonPositive(n) && isInteger(n)

/**
 * @since 0.2.0
 */
export const prismNonPositiveInteger: Prism<number, NonPositiveInteger> = prism<NonPositiveInteger>(
  isNonPositiveInteger
)
