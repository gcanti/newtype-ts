import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonPositive, NonPositive } from './NonPositive'
import { isNonZero, NonZero } from './NonZero'

export interface Negative extends Concat<NonZero, NonPositive> {}

export const isNegative = (n: number) => isNonZero(n) && isNonPositive(n)

export const prismNegative: Prism<number, Negative> = prism<Negative>(isNegative)
