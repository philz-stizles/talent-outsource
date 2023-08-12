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
