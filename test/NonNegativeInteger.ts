import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNonNegativeInteger } from '../src/NonNegativeInteger'

describe('NonNegativeInteger', () => {
  it('prismNonNegativeInteger', () => {
    assert.deepEqual(prismNonNegativeInteger.getOption(1.5), none)
    assert.deepEqual(prismNonNegativeInteger.getOption(1), some(1))
    assert.deepEqual(prismNonNegativeInteger.getOption(0), some(0))
    assert.deepEqual(prismNonNegativeInteger.getOption(-1), none)
    assert.deepEqual(prismNonNegativeInteger.getOption(-1.5), none)
  })
})
