let iphone = {
  name: "Iphone 13 pro",
  price: 100000,
  description: "the new apple iphone 13 pro",
  rating: 4.8,

  display: () => {
    //   exception case this dees not referrs to the calling context
    console.log(this);
  },
};

let macbook = {
  name: "Macbook M2 ",
  price: 125000,
  description: "the new apple macbook m2",
  rating: 4.9,

  display: function () {
    console.log(this);
  },
};

macbook.display();
iphone.display();
