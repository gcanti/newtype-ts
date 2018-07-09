import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { Integer, isInteger } from './Integer'
import { isNonNegative, NonNegative } from './NonNegative'

export interface NonNegativeInteger extends Concat<NonNegative, Integer> {}

export const isNonNegativeInteger = (n: number) => isNonNegative(n) && isInteger(n)

export const prismNonNegativeInteger: Prism<number, NonNegativeInteger> = prism<NonNegativeInteger>(
  isNonNegativeInteger
)
