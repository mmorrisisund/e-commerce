require('dotenv').config()
const protect = require('./protect')

describe('route protect middleware', () => {
  it('should allow logged in user to proceed', async () => {
    const req = {
      cookies: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.MTIzNDU.ySmaRG98mOz6Z69yrzPGeczPu_EgBzOCo2M6MbRcdWs',
      },
    }
    const res = { json: jest.fn() }
    const next = jest.fn()

    await protect(req, res, next)

    expect(req.state.userId).toEqual(12345)
    expect(res.json).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
  })

  it('should respond with a fail status if user is not logged in', async () => {
    const req = {
      cookies: {},
    }
    const res = { json: jest.fn() }
    const next = jest.fn()

    await protect(req, res, next)

    expect(req.state).toBeUndefined()
    expect(res.json).toHaveBeenCalled()
    expect(next).not.toHaveBeenCalled()
  })

  it('should respond with a fail status if token signature is invalid', async () => {
    const req = {
      cookies: { token: '12345' },
    }
    const res = { json: jest.fn() }
    const next = jest.fn()

    await protect(req, res, next)

    expect(req.state).toBeUndefined()
    expect(res.json).toHaveBeenCalled()
    expect(next).not.toHaveBeenCalled()
  })
})
