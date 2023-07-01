
// var calculatrice = eval()
// prompt(calculatrice);
// console.log(calculatrice) ;

function test() {
  const x = 2;
  const y = 4;
  // Direct call, uses local scope
  console.log(eval("x + y")); // Result is 6
  console.log(eval?.("x + y")); // Uses global scope, throws because x is undefined
}

