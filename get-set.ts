class User {
  _login: string;
  password: string;

  set login(value: string) {
    this._login = value
  }

  get login(): string {
    return this._login
  }
}

const user = new User()