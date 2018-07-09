import { Newtype, prism } from '.'
import { Prism } from 'monocle-ts'

export interface Integer extends Newtype<{ readonly Integer: unique symbol }, number> {}

export const isInteger = (n: number) => n % 1 === 0

export const prismInteger: Prism<number, Integer> = prism<Integer>(isInteger)
