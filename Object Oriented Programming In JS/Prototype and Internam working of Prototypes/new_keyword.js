class Product {
  //   name;
  //   price;
  //   description;

  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    // return 10; // primitive -> no effect
    // return { x: 10 };
    // return this; // if you dont return anything, it is equal to saying return this;
  }
  display() {
    //   print the product
  }
}

const p = new Product("Bag", 2000, "cool bag");
console.log(p);
