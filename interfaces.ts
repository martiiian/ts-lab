namespace interfaces {
  interface ILogger {
    log(...args: unknown[]): void
    error(...args: unknown[]): void
  }

  class Logger implements ILogger {
    error(...args: unknown[]): void {
      // eslint-disable-next-line no-console
      console.log(args)
    }

    log(...args: unknown[]): void {
      // eslint-disable-next-line no-console
      console.log(args)
    }
  }

  interface IPayable {
    pay(paymentId: number): void;
    price?: number;
  }

  class User implements IPayable {
    pay(paymentId: number): void {
    }
  }
}