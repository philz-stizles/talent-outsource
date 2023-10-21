export enum httpStatus {
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export class ApiResponse<T> {
  status: boolean;
  message: string;
  data: T | undefined;

  constructor(message: string, data?: T, status = true) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export class APIQuery {
  query: any;

  queryString: any;

  constructor(query: any, queryString: any) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(field => delete queryObj[field]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
    const filterQuery = JSON.parse(queryStr);

    this.query.find(filterQuery);

    return this;
  }

  // SORTING
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.replace(',', ' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  // FIELD LIMITING
  limitFields() {
    if (this.queryString.fields) {
      const selectFields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(selectFields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  // PAGINATION
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

