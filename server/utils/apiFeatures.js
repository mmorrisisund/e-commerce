module.exports = class APIFeatures {
  constructor(query, queryParams) {
    this.query = query
    this.queryParams = queryParams
  }

  filter() {
    const queryObj = { ...this.queryParams }
    const excludedFields = ['sort', 'fields', 'limit', 'page', 'within']
    excludedFields.forEach(el => delete queryObj[el])

    let queryString = JSON.stringify(queryObj)
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      match => `$${match}`
    )

    const query = JSON.parse(queryString)
    if (this.queryParams.within) {
      const { center, distance } = this.queryParams.within
      query.location = {
        $geoWithin: {
          $centerSphere: [center, distance / 3963],
        },
      }
    }
    this.query = this.query.find(query)

    return this
  }

  sort() {
    if (this.queryParams.sort) {
      const sortBy = this.queryParams.sort.split(',').join(' ')
      this.query = this.query.sort(sortBy)
    } else {
      this.query = this.query.sort('-created')
    }

    return this
  }

  limitFields() {
    if (this.queryParams.fields) {
      const fields = this.queryParams.fields.split(',').join(' ')
      this.query = this.query.select(fields)
    } else {
      this.query = this.query.select('-__v')
    }

    return this
  }

  paginate() {
    const page = this.queryParams.page ?? 1
    const limit = this.queryParams.limit
    const skip = (page - 1) * limit

    this.query = this.query.skip(skip).limit(limit)

    return this
  }
}
