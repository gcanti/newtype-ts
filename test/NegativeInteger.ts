import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNegativeInteger } from '../src/NegativeInteger'

describe('NegativeInteger', () => {
  it('prismNegativeInteger', () => {
    assert.deepEqual(prismNegativeInteger.getOption(1.5), none)
    assert.deepEqual(prismNegativeInteger.getOption(1), none)
    assert.deepEqual(prismNegativeInteger.getOption(0), none)
    assert.deepEqual(prismNegativeInteger.getOption(-1), some(-1))
    assert.deepEqual(prismNegativeInteger.getOption(-1.5), none)
  })
})
