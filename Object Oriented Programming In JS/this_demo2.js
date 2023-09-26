let Product = {
  arr: [
    {
      name: "Iphone",
      price: 100000,
      description: "The new apple iphone 13 pro",
      rating: 4.8,
      getCategory: function print() {
        console.log(this.category);
      },
    },
    {
      name: "Macbook M2",
      price: 125000,
      description: "The new apple Macbook M2 ",
      rating: 4.8,
      getCategory: function print() {
        console.log(this.category);
      },
    },
  ],
  category: "Electronics",
};

Product.arr[0].getCategory();
