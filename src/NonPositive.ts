/**
 * @since 0.2.0
 */
import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

/**
 * @since 0.2.0
 */
export interface NonPositive extends Newtype<{ readonly NonPositive: unique symbol }, number> {}

/**
 * @since 0.2.0
 */
export const isNonPositive = (n: number) => n <= 0

/**
 * @since 0.2.0
 */
export const prismNonPositive: Prism<number, NonPositive> = prism<NonPositive>(isNonPositive)
