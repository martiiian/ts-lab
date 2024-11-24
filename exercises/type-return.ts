function returnType(value: string | number | boolean): string {
  return typeof value;
}

console.log(returnType(1));
console.log(returnType('sh'));
console.log(returnType(true));

