namespace ReadonlyRequiredPartial {
  interface User {
    name: string;
    age?: number;
    email: string;
  }

  // самое простое, это я и так знаю
  type partial = Partial<User>

  // но, это валидно(что собственно логично вполне)
  // странно однако иметь такой
  const p: partial = {}

  // это тоже классика
  type required = Required<User>

  type readonly = Readonly<User>
}