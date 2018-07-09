import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNonPositive } from '../src/NonPositive'

describe('NonPositive', () => {
  it('prismNonPositive', () => {
    assert.deepEqual(prismNonPositive.getOption(1.5), none)
    assert.deepEqual(prismNonPositive.getOption(1), none)
    assert.deepEqual(prismNonPositive.getOption(0), some(0))
    assert.deepEqual(prismNonPositive.getOption(-1), some(-1))
    assert.deepEqual(prismNonPositive.getOption(-1.5), some(-1.5))
  })
})
