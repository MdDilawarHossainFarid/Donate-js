var teacher = "Sanket"; // global scope
function fun() {
  // global scope
  console.log(teacher); // no error will be given
  console.log(content); // throws an error
  var teacher = "Pulkit"; // scope of fun
  let content = "JS";
  if (content == "JS") {
    let hours = "120+";
    console.log(hours);
  }
  console.log(teacher, content);
}

fun();
console.log(teacher);
// console.log(content);
