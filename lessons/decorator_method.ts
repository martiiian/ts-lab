namespace decoratorMethod {
  interface IUserService {
    users: number;
    getUsersInDatabase(n: number): number;
  }

  class UserService implements IUserService {
    users: number = 1000;

    @CatchError
    getUsersInDatabase(n: number): number {
      if (n === 3) {
        throw new Error('Ошибка')
      } else {
        return 5;
      }
    }
  }

  // function CatchError() {
  //   return function (target: Object, _: string | symbol, descriptor: PropertyDescriptor) : PropertyDescriptor | void | ((n: number) => number) {
  //     const originalMethod = descriptor.value
  //
  //     descriptor.value = function (...args: any[])  {
  //       try {
  //         return originalMethod?.apply(this, args)
  //       } catch (e) {
  //         // eslint-disable-next-line no-console
  //         console.log('biba')
  //         throw e;
  //       }
  //     }
  //
  //     return descriptor
  //   }
  // }

  function CatchError<T extends { kind: string }>(
    target: any,
    context: T
  ) {
    if (context.kind === 'method') {
      const originalMethod = target;

      function replacementMethod(this: any, ...args: any[]) {
        try {
          return originalMethod.apply(this, args);
        } catch (error) {
          console.log('Biba error in method');
          // throw error;
        }
      }

      return replacementMethod;
    }
    return target;
  }

  const userService = new UserService().getUsersInDatabase(3)
}
