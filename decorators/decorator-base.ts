function bibaDecorator(originalMethod: any, _context: ClassMethodDecoratorContext) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log('here is biba')
    const result = originalMethod.call(this, ...args)
    console.log('biba showed')
    return result
  }
  return replacementMethod
}

class Person {
  constructor(public name: string = 'Biba') {
  }

  @bibaDecorator
  greet() {
    // eslint-disable-next-line no-console
    console.log(`do something with ${this.name}`)
  }
}

const p = new Person()
p.greet()
