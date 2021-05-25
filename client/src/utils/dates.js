const MILLISECONDS_PER_YEAR = 1000 * 60 * 60 * 24 * 365

export const getYearsAgo = (startDate, years) =>
  new Date(Date.now() - years * MILLISECONDS_PER_YEAR)
    .toISOString()
    .split('T')[0]

export const getAge = dob =>
  Math.round((Date.now() - new Date(dob)) / MILLISECONDS_PER_YEAR)
