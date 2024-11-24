interface IObject1 {
  one: string;
  two: string;
}

// обычная мапа
type Object1Map<Type> = {
  [key in keyof Type]: boolean;
}


type Mapped = Object1Map<IObject1> // { one: boolean; two: boolean }

// делаем опциональность
type Object1MapOptional<Type> = {
  [key in keyof Type] +?: boolean;
}

// +? - добавить опциональность
// -? - убрать опциональность

type MappedOptional = Object1MapOptional<IObject1> // { one?: boolean; two?: boolean }

// делаем readonly
type Object1MapReadonly<Type> = {
  +readonly [key in keyof Type] +?: boolean;
}

type MappedOptionalReadonly = Object1MapReadonly<IObject1>; // { readonly one?: boolean; readonly two?: boolean }
