/** это такой способ получения типа из уже существующего объекта или типа, например */
interface Man {
  arm: number;
  leg: number;
  head: {
    eye: number;
  },
  shoes: ['red', 'black', 'orange']
}

type armType = Man['arm'] // number
type eyeHeadType = Man['head']['eye'] // number

