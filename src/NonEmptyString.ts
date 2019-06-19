import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

/**
 * @since 0.2.0
 */
export interface NonEmptyString extends Newtype<{ readonly NonEmptyString: unique symbol }, string> {}

/**
 * @since 0.2.0
 */
export const isNonEmptyString = (s: string) => s.length > 0

/**
 * @since 0.2.0
 */
export const prismNonEmptyString: Prism<string, NonEmptyString> = prism<NonEmptyString>(isNonEmptyString)
