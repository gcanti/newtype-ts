/**
 * @since 0.2.0
 */
import { Prism } from 'monocle-ts'
import { Newtype, prism, URIOf } from './'
import { NonEmptyString } from './NonEmptyString'

/**
 * @since 0.2.0
 */
export interface Char extends Newtype<URIOf<NonEmptyString> & { readonly Length: 1 }, string> {}

/**
 * @since 0.2.0
 */
export const isChar = (s: string) => s.length === 1

/**
 * @since 0.2.0
 */
export const prismChar: Prism<string, Char> = prism<Char>(isChar)
