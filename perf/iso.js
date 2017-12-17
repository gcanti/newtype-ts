const Benchmark = require('benchmark')
const { Iso } = require('monocle-ts')

const suite = new Benchmark.Suite()

const unsafeCoerce = a => a

const anyIso = new Iso(unsafeCoerce, unsafeCoerce)

const iso1 = () => new Iso(unsafeCoerce, unsafeCoerce)

const iso2 = () => anyIso

suite
  .add('iso1', function() {
    iso1()
  })
  .add('iso2', function() {
    iso2()
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
