import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { isNonNegative, NonNegative } from './NonNegative'
import { isNonZero, NonZero } from './NonZero'

export interface Positive extends Concat<NonZero, NonNegative> {}

export const isPositive = (n: number) => isNonZero(n) && isNonNegative(n)

export const prismPositive: Prism<number, Positive> = prism<Positive>(isPositive)
