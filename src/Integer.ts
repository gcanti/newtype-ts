/**
 * @since 0.2.0
 */
import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

/**
 * @since 0.2.0
 */
export interface Integer extends Newtype<{ readonly Integer: unique symbol }, number> {}

/**
 * @since 0.2.0
 */
export const isInteger = (n: number) => Number.isInteger(n)

/**
 * @since 0.2.0
 */
export const prismInteger: Prism<number, Integer> = prism<Integer>(isInteger)
