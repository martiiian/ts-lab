/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

let strings = ['hello', '98052', '101']

let validators: { [s: string]: Validation.StringValidator } = {}
validators['zip code'] = new Validation.ZipCodeValidator()
validators['letters only'] = new Validation.LettersOnlyValidator()

for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s)
    console.log(`'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}'`)
  }
}