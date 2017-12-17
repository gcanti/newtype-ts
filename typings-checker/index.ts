import { Newtype, iso } from '../src'

type Rational = [number, number]
type Dense<Currency extends string> = Newtype<['Dense', Currency], Rational>
type USD = Dense<'USD'>
type EUR = Dense<'EUR'>
type CHF = Dense<'CHF'>

const usdIso = iso<USD>()
const eurIso = iso<EUR>()
const chfIso = iso<CHF>()

const dollar = usdIso.wrap([1, 1])
const euro = eurIso.wrap([1, 1])
const franc = chfIso.wrap([1, 1])

declare function g(dollars: Dense<'USD' | 'EUR'>): void

g(dollar)
g(euro)
// $ExpectError Type '"CHF"' is not assignable to type '"USD" | "EUR"'
g(franc)
