import * as assert from 'assert'
import { Newtype, iso, over, getMonoid, getRing, getOrd } from '../src'
import { monoidSum, fold } from 'fp-ts/lib/Monoid'
import { fieldNumber } from 'fp-ts/lib/Field'
import { Lens } from 'monocle-ts/lib'
import { ordNumber, lessThan } from 'fp-ts/lib/Ord'

type Label = Newtype<'Label', string>
const label = iso<Label>()

type Real = Newtype<'Real', number>
const real = iso<Real>()

type Age = Newtype<'Age', number>
const age = iso<Age>()

type Person = {
  name: string
  age: Age
}

describe('iso', () => {
  it('should not change the runtime representation', () => {
    assert.strictEqual(label.wrap('foo'), 'foo')
  })

  it('should allow mappings', () => {
    assert.strictEqual(label.modify(s => s + '!')(label.wrap('foo')), 'foo!')
  })

  it('should allow optic managment', () => {
    const person: Person = {
      name: 'Giulio',
      age: age.wrap(43)
    }
    const ageLens = Lens.fromProp<Person, 'age'>('age').compose(age.asLens())
    assert.deepEqual(ageLens.set(44)(person), {
      name: 'Giulio',
      age: 44
    })
  })
})

describe('over', () => {
  it('should transform a newtype into another newtype', () => {
    const getter = over<Label, Real>(s => s.length)
    assert.strictEqual(getter.get(label.wrap('foo')), 3)
  })
})

describe('getOrd', () => {
  it('should lift a Ord', () => {
    const ordReal = getOrd<Real>(ordNumber)
    assert.strictEqual(lessThan(ordReal)(real.wrap(2))(real.wrap(3)), true)
    assert.strictEqual(lessThan(ordReal)(real.wrap(3))(real.wrap(3)), false)
  })
})

describe('getMonoid', () => {
  it('should lift a Monoid', () => {
    const monoidReal = getMonoid<Real>(monoidSum)
    assert.strictEqual(fold(monoidReal)([real.wrap(2), real.wrap(3)]), 5)
  })
})

describe('getRing', () => {
  it('should lift a Ring', () => {
    const ringReal = getRing<Real>(fieldNumber)
    assert.strictEqual(ringReal.mul(real.wrap(2))(real.wrap(3)), 6)
  })
})
