
// ONELINER HERE IS FINE!
// return (a > b) ? a : b

// if(a > b) {
//   return a
// }
// else {
//   return b
// }


// BAD EXAMPLE
// return (a > b) ? c +d === f  * B ? wehatever.substring()

// shorthand version
const sum = (a,b) => a+b // return a+b

// THIS SUCKS! oneliner for LOGIC is not that cool
// const crazyThing = (input1, input2, factor15) => (input == "abc") ? input2*fac

// explicit / long version
const sum = (a,b) => {
  return a+b
}

console.log( sum(5,3) )

return





console.log("EXPECTED RESULT:")


console.log(" 1 1 1 2 2 2 3 3 3 ");
console.log(" 1 1 1 2 2 2 3 3 3 ");
console.log(" 1 1 1 2 2 2 3 3 3 ");

console.log()
console.log("OUR Result: ")

// 0..2 => 3 mal
for (let repeat = 0; repeat < 3; repeat++) {
    // 1. repeat 0 => 2. 0 < 3 
    let zahlenString = "";
    
    // 1..3 => 3 mal
    for (let index = 1; index <= 3; index++) {

      // index = 1 => 2 => 3

      // 0..2 => 3 mal
      for (let counter = 0; counter < 3; counter++) {
        // 1. run
        // zahlenstring = ""
        // index = 1
        // zahlenstring = "" + 1 + " " 
        // result => "1 "

        // 2. run
        // zahlenstring = "1 "
        // index = 1
        // "1 " + 1 + " " => "1 1 "

        // 3. run
        // zahlenstring = "1 1 "
        // index = 1
        // "1 1 " + 1 + " " => "1 1 1 "
        zahlenString += index + " ";
      };

    };
    console.log(zalhenString);
};


// outer loop => kreirt zeile
// 1. inner loop => kreirt blöcke
// 2. innerst loop => kreirt die zahlen strings