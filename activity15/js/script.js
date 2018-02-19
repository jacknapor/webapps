var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}
if (x === y) {
  console.log("Strict: x=4 is equal to y=4");
} else {
  console.log("Strict: x=4 is NOT equal to y=4");
}


x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
} else {
  console.log("Strict: x='4' is NOT equal to y=4");
}

