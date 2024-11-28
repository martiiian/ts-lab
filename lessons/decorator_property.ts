namespace DecoratorProperty {
  interface IUserService {
    users: number;
  }

  class UserService implements IUserService {
    @Max(100)
    users: number = 1000;
  }

  function Max(max: number) {
    return (target: any, propertyKey: string) => {
      let value: number;
      const setter = function (newValue: any) {
        if (newValue > max) {
          // eslint-disable-next-line no-console
          console.log('Нельзя установить значение больше', max)
        } else {
          value = newValue
        }
      }

      const getter = function () {
        return value;
      }

      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
      })
    }
  }

  const userService = new UserService()
}