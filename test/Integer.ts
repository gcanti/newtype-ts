import * as assert from 'assert'
import { none, some } from 'fp-ts/lib/Option'
import { prismInteger } from '../src/Integer'

describe('Integer', () => {
  it('prismInteger', () => {
    assert.deepEqual(prismInteger.getOption(1.5), none)
    assert.deepEqual(prismInteger.getOption(1), some(1))
    assert.deepEqual(prismInteger.getOption(0), some(0))
    assert.deepEqual(prismInteger.getOption(-1), some(-1))
    assert.deepEqual(prismInteger.getOption(-1.5), none)
  })
})
