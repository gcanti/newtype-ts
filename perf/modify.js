const Benchmark = require('benchmark')
const { iso } = require('../lib')

const suite = new Benchmark.Suite()

const double = n => n * 2
const eurIso = iso()
const doubleEUR = eurIso.modify(double)

suite
  .add('double', function() {
    double(2)
  })
  .add('doubleEUR', function() {
    doubleEUR(eurIso.wrap(2))
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
