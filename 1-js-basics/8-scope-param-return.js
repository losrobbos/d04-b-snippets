

// Functions OHNE return ? => just DO something / not interested in any result => DISPLAY !
// Functions MIT return ? => create some NEW info that we don't have right now

// let strText = "das ist so ein schöner tag"
// let arrWords = strText.split(" ")
// console.log( "Counted words in string: ", arrWords.length )

// strText = "das ist so ein wunderschöner, viel zu sonniger tag"
// arrWords = strText.split(" ")
// console.log( "Counted words in string: ", arrWords.length )

// outsource logic that we use repeatedly into a FUNCTION

const countWords = ( text ) => {
  const arrWords = text.split(" ")
  // console.log( "Counted words in string: ", arrWords.length )
  return arrWords.length
}

const arrSentences = [
  "viel zu sonniger tag",
  "das ist so ein wunderschöner, viel zu sonniger tag",
  "ich verliere die lust",
  "aber einer geht noch"
]

// loop over sentences and count words!
// print word count for each sentence!
for( let sentence of arrSentences ) {
  const wordCount = countWords( sentence )
  console.log( { sentence, wordCount } )
}
/**
 * EXTEMELY RARELY NEEDED => just if we wanna do funky calculation stuff 
 * for(let i=0; i<arrSentences.length); i++ {
 *  let sentence = arrSentences[i]
 * }
 */

// let count1 = countWords( arrSentences[0] )
// let count2 = countWords( arrSentences[1] )

// console.log({count1})
// console.log({count2})