const Benchmark = require('benchmark')
const { iso } = require('../lib')

const suite = new Benchmark.Suite()

const double = n => n * 2

const ageIso = iso()

const age = ageIso.wrap(43)

const modify = ageIso.modify(double)

suite
  .add('double', function() {
    double(2)
  })
  .add('modify', function() {
    modify(age)
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
