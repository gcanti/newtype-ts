import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

export interface NonNegative extends Newtype<{ readonly NonNegative: unique symbol }, number> {}

export const isNonNegative = (n: number) => n >= 0

export const prismNonNegative: Prism<number, NonNegative> = prism<NonNegative>(isNonNegative)
