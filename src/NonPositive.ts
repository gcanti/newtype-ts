import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

export interface NonPositive extends Newtype<{ readonly NonPositive: unique symbol }, number> {}

export const isNonPositive = (n: number) => n <= 0

export const prismNonPositive: Prism<number, NonPositive> = prism<NonPositive>(isNonPositive)
