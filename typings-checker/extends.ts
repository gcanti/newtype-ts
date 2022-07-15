import { Newtype, Extends } from '../src'


type Currency = Newtype<{ readonly Currency: unique symbol }, number>

type USD = Extends<Currency, { readonly USD: unique symbol }>
type EUR = Extends<Currency, { readonly EUR: unique symbol }>

interface GBP extends Extends<Currency, { readonly GBP: unique symbol }> { }

declare function double<T extends Currency>(c: T): T

declare function usdToEur(usd: USD, eur: EUR): EUR

declare const usd: USD
declare const eur: EUR
declare const gbp: GBP

double(usd)
double(eur)
double(gbp)

usdToEur(usd, eur)

// $ExpectError Property 'USD' is missing in type '{ readonly EUR: unique symbol; } & { readonly Currency: unique symbol; }' but required in type '{ readonly USD: unique symbol; }'
usdToEur(eur, usd)

// $ExpectError Property 'USD' is missing in type '{ readonly GBP: unique symbol; } & { readonly Currency: unique symbol; }' but required in type '{ readonly USD: unique symbol; }'
usdToEur(gbp, eur)