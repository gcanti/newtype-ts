import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismPositive } from '../src/Positive'

describe('Positive', () => {
  it('prismPositive', () => {
    assert.deepEqual(prismPositive.getOption(1.5), some(1.5))
    assert.deepEqual(prismPositive.getOption(1), some(1))
    assert.deepEqual(prismPositive.getOption(0), none)
    assert.deepEqual(prismPositive.getOption(-1), none)
    assert.deepEqual(prismPositive.getOption(-1.5), none)
  })
})
