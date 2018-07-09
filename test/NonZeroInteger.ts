import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNonZeroInteger } from '../src/NonZeroInteger'

describe('NonZeroInteger', () => {
  it('prismNonZeroInteger', () => {
    assert.deepEqual(prismNonZeroInteger.getOption(1.5), none)
    assert.deepEqual(prismNonZeroInteger.getOption(1), some(1))
    assert.deepEqual(prismNonZeroInteger.getOption(0), none)
    assert.deepEqual(prismNonZeroInteger.getOption(-1), some(-1))
    assert.deepEqual(prismNonZeroInteger.getOption(-1.5), none)
  })
})
