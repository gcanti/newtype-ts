/**
 * @since 0.2.0
 */
import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

/**
 * @since 0.2.0
 */
export interface NonNegative extends Newtype<{ readonly NonNegative: unique symbol }, number> {}

/**
 * @since 0.2.0
 */
export const isNonNegative = (n: number) => n >= 0

/**
 * @since 0.2.0
 */
export const prismNonNegative: Prism<number, NonNegative> = prism<NonNegative>(isNonNegative)
