// class User2 {
//     name: string;
//     age: number;
//
//     constructor();
//     constructor(name: string); // конструктор имплементации
//     constructor(age: number); // конструктор имплементации
//     constructor(ageOrName?: string | number) { // конструктор реализации
//       if (typeof ageOrName === 'string') {
//         this.name = ageOrName;
//       } else if (typeof ageOrName === 'number') {
//         this.age = ageOrName;
//       }
//     }
// }
//
// const user = new User('Вася')
// const user2 = new User()
// const user3 = new User(10)
//
