import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNonNegative } from '../src/NonNegative'

describe('NonNegative', () => {
  it('prismNonNegative', () => {
    assert.deepEqual(prismNonNegative.getOption(1.5), some(1.5))
    assert.deepEqual(prismNonNegative.getOption(1), some(1))
    assert.deepEqual(prismNonNegative.getOption(0), some(0))
    assert.deepEqual(prismNonNegative.getOption(-1), none)
    assert.deepEqual(prismNonNegative.getOption(-1.5), none)
  })
})
