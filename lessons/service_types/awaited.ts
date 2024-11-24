namespace Awaited {
  // типо мы хотим узнать, что вернет промис
  type a = Awaited<Promise<string>>

  // тут тоже он возвращает string
  type b = Awaited<Promise<Promise<string>>>

  interface IMenu {
    name: string;
    url: string;
  }

  async function getMenu(): Promise<IMenu[]> {
    return [{ name: 'Аналитика', url: 'analytics' }]
  }

  type R = Awaited<ReturnType<typeof getMenu>>

  const rImp: R = [{ name: 'lol', url: 'kek' }]

  async function getArray<T>(x: T) {
    return [await x]
  }
}