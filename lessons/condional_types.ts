namespace ConditionalTypes {
  const a: number = Math.random() > 0.5 ? 1 : 0;

// задача сделать так, чтобы содержимое data свойства зависело от значения дженерика
  interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string:  Error;
  }

  const error: HTTPResponse<'success'> = {
    code: 200,
    data: 'something'
  }

  const success: HTTPResponse<'failed'> = {
    code: 200,
    data: new Error('something')
  }

// это может использоваться для того, чтобы упростить перегрузку

  class User {
    id: number;
    name: string;
  }

  class UserPersisted extends User {
    dbId: string;
  }

  function getUser(id: number): User;
  function getUser(dbId: string): UserPersisted;
  function getUser(dbIdOrId: string | number): User | UserPersisted {
    if (typeof dbIdOrId === 'number') {
      return new User();
    } else {
      return new UserPersisted();
    }
  }

  // T extends number это условие говорящее -- расширяет ли T тип number?
  type UserOrUserPersisted<T extends string | number> = T extends number ? User : UserPersisted;

  function getUser2<T extends string | number>(id: T): UserOrUserPersisted<T> {
    if (typeof id === 'number') {
      // нам необходимо напрямую кастовать тут этот тип, чтобы TS схавал, иначе User !== UserOrUserPersisted
      return new User() as UserOrUserPersisted<T>;
    } else {
      return new UserPersisted();
    }
  }

  // использование infer


}
