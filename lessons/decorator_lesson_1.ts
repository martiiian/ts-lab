 interface IUserService {
   users: number;
   getUsersInDatabase(): number;
 }

 @nullUser
 @setUsers(2)
 @threeUserAdvanced
 class UserService implements IUserService {
   users: number = 1000;

   getUsersInDatabase(): number {
     return this.users;
   }
 }

 function nullUser(target: Function) {
   target.prototype.users = 0;
 }

 function setUsers(users: number) {
   return (target: Function) => {
    target.prototype.users = users;
   }
 }

 function threeUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T)  {
    return class extends constructor {
      users = 3;
    }
 }

 // делаем тоже advanced принимает параметры
 function setUserAdvanced() {
   return <T extends { new(...args: any[]): {} }>(constructor: T) => {
     return class extends constructor {
       users = 3;
     }
   }
 }





