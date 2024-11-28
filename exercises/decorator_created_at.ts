namespace decoratorCreated {
  interface IUserService {
    users: number;
    // тут можно не добавлять имплементацию, а сделать объединение(см пример ниже)
    // createdAt: string;
    getUsersInDatabase(): number;
  }

  @CreatedAt()
  class UserService implements IUserService {
    users: number = 1000;
    // createdAt: '';

    getUsersInDatabase(): number {
      return this.users;
    }
  }

  function CreatedAt() {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        createdAt = new Date();
      }
    }
  }

  const userService = new UserService() as IUserService & { createdAt: string };

  console.log(userService.createdAt);
}
