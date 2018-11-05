import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

export interface NonEmptyString extends Newtype<{ readonly NonEmptyString: unique symbol }, string> {}

export const isNonEmptyString = (s: string) => s.length > 0

export const prismNonEmptyString: Prism<string, NonEmptyString> = prism<NonEmptyString>(isNonEmptyString)
