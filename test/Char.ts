import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismChar } from '../src/Char'

describe('Char', () => {
  it('prismChar', () => {
    assert.deepEqual(prismChar.getOption('a'), some('a'))
    assert.deepEqual(prismChar.getOption('ab'), none)
    assert.deepEqual(prismChar.getOption(''), none)
  })
})
