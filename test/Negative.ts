import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNegative } from '../src/Negative'

describe('Negative', () => {
  it('prismNegative', () => {
    assert.deepEqual(prismNegative.getOption(1.5), none)
    assert.deepEqual(prismNegative.getOption(1), none)
    assert.deepEqual(prismNegative.getOption(0), none)
    assert.deepEqual(prismNegative.getOption(-1), some(-1))
    assert.deepEqual(prismNegative.getOption(-1.5), some(-1.5))
  })
})
