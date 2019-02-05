import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

export interface Integer extends Newtype<{ readonly Integer: unique symbol }, number> {}

export const isInteger = (n: number) => Number.isInteger(n)

export const prismInteger: Prism<number, Integer> = prism<Integer>(isInteger)
