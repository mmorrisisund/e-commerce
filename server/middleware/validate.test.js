const Joi = require('joi')

const validateSchema = require('./validate')

const testSchema = Joi.object({
  name: Joi.string().required(),
})

describe('validate middleware', () => {
  it('should return fail response when data is invalid', () => {
    const req = { body: {} }
    const res = { json: jest.fn() }
    const next = jest.fn()

    validateSchema(testSchema)(req, res, next)

    expect(next.mock.calls.length).toEqual(0)
    expect(res.json.mock.calls.length).toEqual(1)
    expect(res.json).toHaveBeenCalledWith({
      status: 'fail',
      data: { message: '"name" is required' },
    })
  })

  it('should call next fn if data is valid', () => {
    const req = { body: { name: 'art' } }
    const res = { json: jest.fn() }
    const next = jest.fn()

    validateSchema(testSchema)(req, res, next)

    expect(next.mock.calls.length).toEqual(1)
    expect(res.json.mock.calls.length).toEqual(0)
  })
})
