export default class CustomerError extends Error {
  status;
  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}
