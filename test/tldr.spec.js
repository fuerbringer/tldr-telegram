'use strict'

const should = require('should')
const tldr = require('../lib/tldr')

describe('tldr', () => {
  it('should return empty contents for a non-existing page', (done) => {
    tldr.downloadPage('definitelydoesntexist', 'linux', (err, content) => {
      should.exist(err)
      should.not.exist(content)
      done()
    })
  })
})
