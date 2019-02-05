const home = require('../src/home')
const { expect } = require('chai')
const { fake } = require('sinon')

describe('The home page', function () {
  it('should say "Hello"', function () {
    const req = fake()
    const res = {
      send: fake()
    }

    home(req, res)

    expect(res.send).to.have.been.calledWithMatch(/Hello/)
  })
})
