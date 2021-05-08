module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    res.json({ status: 'error', data: { message: err.message } })
  } else {
    res.json({ status: 'error', data: { message: 'Unknown server error' } })
  }
}
