interface Handler {
  setNext: (next: Handler) => Handler;
  handle: (source: any) => void | null;
}
abstract class BaseHandler implements Handler {
  constructor(private next: Handler | null) {}
  handle(source: any) {
    if (this.next) {
      return this.next.handle(source);
    }

    return null;
  }

  setNext(next: Handler): Handler {
    this.next = next;
    return next;
  }
}

export { Handler, BaseHandler };
