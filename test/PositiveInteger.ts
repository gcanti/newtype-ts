import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismPositiveInteger } from '../src/PositiveInteger'

describe('PositiveInteger', () => {
  it('prismPositiveInteger', () => {
    assert.deepEqual(prismPositiveInteger.getOption(1.5), none)
    assert.deepEqual(prismPositiveInteger.getOption(1), some(1))
    assert.deepEqual(prismPositiveInteger.getOption(0), none)
    assert.deepEqual(prismPositiveInteger.getOption(-1), none)
    assert.deepEqual(prismPositiveInteger.getOption(-1.5), none)
  })
})
