namespace ReturnParameters {
  // получить из функции то, что возвращает из типов
  // или параметры, что в функции

  class User {
    constructor(public id: number, public name: string) {}
  }

  function getData(id: number) {
    return new User(id, 'Виталий')
  }

  type RT = ReturnType<typeof getData>
  // если будет дженерик у функции
  type RT1 = ReturnType<<T>() => T>
  // мы можем передать extends для T чтобы четко обозначить
  type RT2 = ReturnType<<T extends string>() => T>

  type PT = Parameters<typeof getData>
  
  type CP = ConstructorParameters<typeof User>
}