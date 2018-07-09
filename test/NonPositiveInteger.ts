import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNonPositiveInteger } from '../src/NonPositiveInteger'

describe('NonPositiveInteger', () => {
  it('prismNonPositiveInteger', () => {
    assert.deepEqual(prismNonPositiveInteger.getOption(1.5), none)
    assert.deepEqual(prismNonPositiveInteger.getOption(1), none)
    assert.deepEqual(prismNonPositiveInteger.getOption(0), some(0))
    assert.deepEqual(prismNonPositiveInteger.getOption(-1), some(-1))
    assert.deepEqual(prismNonPositiveInteger.getOption(-1.5), none)
  })
})
