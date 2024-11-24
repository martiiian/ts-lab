const fruits = ['apple', 'orange', 'mango'] as const;

type Fruit = typeof fruits[number];

const mixed = [1, "hello", true]

type Mixed = typeof mixed[number];