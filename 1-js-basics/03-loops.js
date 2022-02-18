

const wochentage = [ "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So" ] // 7

let num = 0

const num1 = num++
// 0 => 1
const num2 = num++
// 1 => 2
const num3 = num++
// 2

// console.log( num1, num2, num3 )

// FOR LOOP
// go to every single item of the array and do something with that sh*t
for (let i = 0; i < wochentage.length; i++) {
  console.log( `Element at index ${i} is ${wochentage[i]}` )
}

// ENDLOS LOOP
// while(true) {
//   console.log("Hallo")
// }


// Loop = Schleife