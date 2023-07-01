interface IProduct {
  name: string
  description: string
}

class Product implements IProduct {
  name: ''
  description: ''
}


class Factory {
  static createProduct({ name, description }: { name: string, description: string }): Product {
    return new Product()
  }
}
