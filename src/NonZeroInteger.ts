import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { Integer, isInteger } from './Integer'
import { isNonZero, NonZero } from './NonZero'

export interface NonZeroInteger extends Concat<NonZero, Integer> {}

export const isNonZeroInteger = (n: number) => isNonZero(n) && isInteger(n)

export const prismNonZeroInteger: Prism<number, NonZeroInteger> = prism<NonZeroInteger>(isNonZeroInteger)
