import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismNonZero } from '../src/NonZero'

describe('NonZero', () => {
  it('prismNonZero', () => {
    assert.deepEqual(prismNonZero.getOption(1.5), some(1.5))
    assert.deepEqual(prismNonZero.getOption(1), some(1))
    assert.deepEqual(prismNonZero.getOption(0), none)
    assert.deepEqual(prismNonZero.getOption(-1), some(-1))
    assert.deepEqual(prismNonZero.getOption(-1.5), some(-1.5))
  })
})
