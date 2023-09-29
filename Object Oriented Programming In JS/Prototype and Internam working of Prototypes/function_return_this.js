function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.description = d;
  return this;
}

const p = Product("bag", 100, "cool new bag");
console.log(p);
