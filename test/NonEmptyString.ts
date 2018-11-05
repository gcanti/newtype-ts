import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNonEmptyString } from '../src/NonEmptyString'

describe('NonEmptyString', () => {
  it('prismNonEmptyString', () => {
    assert.deepEqual(prismNonEmptyString.getOption('a'), some('a'))
    assert.deepEqual(prismNonEmptyString.getOption('ab'), some('ab'))
    assert.deepEqual(prismNonEmptyString.getOption(''), none)
  })
})
