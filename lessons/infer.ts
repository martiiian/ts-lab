function runTransaction(transaction: {
  fromTo: [string, string]
}) {}

const transaction: GetFirstArg<typeof runTransaction> = {
  fromTo: ['1', '2']
}

runTransaction(transaction)

// infer тут позволяет нам вытащить из функции какой-то аргумент и использовать его в условной типизации
type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;