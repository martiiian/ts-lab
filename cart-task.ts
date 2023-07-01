namespace CartTask {
  class Product {
    id: number
    price: number
    name: string

    constructor(id: number, name: string, price: number) {
      this.id = id
      this.price = price
      this.name = name
    }
  }

  class Delivery {
    date: Date
  }

  class CourierDelivery extends Delivery {
    address: string

    constructor(address: string, date: Date) {
      super();
      this.address = address
      this.date = date
    }
  }

  class PickupDelivery extends Delivery {
    storeId: number

    constructor(storeId: number) {
      super();
      this.storeId = storeId
      this.date = new Date()
    }
  }

  class Cart {
    #products: Product[] = []
    #delivery: Delivery

    addDelivery(delivery: Delivery) {
      this.#delivery = delivery
    }

    addProduct(product: Product) {
      this.#products.push(product)
    }

    deleteProduct(productId: number) {
      this.#products = this.#products.filter((p) => p.id !== productId)
    }

    checkout() {
      return Boolean(this.#products.length && this.#delivery)
    }

    sum() {
      const sum = this.#products.reduce((sum, product) => sum + product.price, 0)
      // eslint-disable-next-line no-console
      console.log(sum)
      return sum
    }
  }

  const pickupDelivery = new PickupDelivery(1)
  const courierDelivery = new CourierDelivery('ул. Пушкина, дом Колотушкина', new Date())

  const cart = new Cart()
  const fish = new Product(1, 'Hek', 300)
  const cheese = new Product(1, 'Hek', 233)
  const beer = new Product(1, 'Hek', 100)

  cart.addProduct(fish)
  cart.addProduct(cheese)
  cart.addDelivery(pickupDelivery)

  cart.sum()
  console.log(cart.checkout())

  const cart2 = new Cart()
  cart2.addProduct(fish)
  cart2.addProduct(beer)
  // cart2.addDelivery(courierDelivery)
  cart2.sum()
  console.log(cart2.checkout())
}