class Car {
  constructor(model) {
    this.carmodel = model;
  }
  print() {
    console.log(this.carmodel);
  }
}

alto = new Car("A12");
audi = new Car("s8");

// console.log(audi.carmodel);

audi.print();
