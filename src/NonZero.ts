import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

/**
 * @since 0.2.0
 */
export interface NonZero extends Newtype<{ readonly NonZero: unique symbol }, number> {}

/**
 * @since 0.2.0
 */
export const isNonZero = (n: number) => n !== 0

/**
 * @since 0.2.0
 */
export const prismNonZero: Prism<number, NonZero> = prism<NonZero>(isNonZero)
