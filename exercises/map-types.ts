namespace MapTypes {
  interface IForm {
    name: string;
    password: string;
    age: number;
  }

  const form: IForm = {
    name: 'Eugene',
    password: '1234',
  }

  type Validation<FormType> = {
    [Property in keyof FormType]: { isValid: true } | {isValid: false, errorMessage: string}
  }

  const formValidation: Validation<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длиннее 5 символов'}
  }
}