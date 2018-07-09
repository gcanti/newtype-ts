import { Prism } from 'monocle-ts'
import { Concat, prism } from '.'
import { Integer, isInteger } from './Integer'
import { isNonPositive, NonPositive } from './NonPositive'

export interface NonPositiveInteger extends Concat<NonPositive, Integer> {}

export const isNonPositiveInteger = (n: number) => isNonPositive(n) && isInteger(n)

export const prismNonPositiveInteger: Prism<number, NonPositiveInteger> = prism<NonPositiveInteger>(
  isNonPositiveInteger
)
