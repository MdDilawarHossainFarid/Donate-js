class Car {
  constructor(model) {
    this.carmodel = model;
  }
  print() {
    console.log(this.carmodel);
  }
}

class Child extends Car {
  constructor(model) {
    super(model);
  }
}

bmw = new Child("bmw8");

bmw.print();
