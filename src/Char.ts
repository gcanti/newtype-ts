import { Prism } from 'monocle-ts'
import { Newtype, prism, URIOf } from './'
import { NonEmptyString } from './NonEmptyString'

export interface Char extends Newtype<URIOf<NonEmptyString> & { readonly Length: 1 }, string> {}

export const isChar = (s: string) => s.length === 1

export const prismChar: Prism<string, Char> = prism<Char>(isChar)
