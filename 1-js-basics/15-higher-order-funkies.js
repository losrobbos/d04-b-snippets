// HIGHER ORDER ARRAY FUNCTIONS

// forEach => Use Case: Loope durch ALLE Items und MACH ETWAS mit jedem Item => AUSGEBEN oder AUSFÜHREN!

const users = [
  { name: 'Zubia', email: 'zubia@zubia.com', admin: true },
  { name: 'Marion', email: 'marion@marion.com', admin: false },
  { name: 'Mojdeh', email: 'mojdeh@mojdeh.com', admin: true }
];

// BEISPIEL: emails senden
users.forEach((user) => {
  console.log(user.email); // Ausgabe
  // sendEmailToUser( user.email ) // DO / execute something for each item in the array
});

// MAP
// BEISPIEL: Eine Info von JEDEM Object extracten
const userNames = users.map((user) => {
  return user.name;
});

console.log({ userNames });

// FILTER
// BEISPIEL: Alle Admins rausfiltern
const admins = users.filter((user) => {
  return user.admin;
});

console.log({ admins });


// Input
const salesInMonth = [
  { product: "Toaster T", price: 15 },
  { product: "Waschmaschine", price: 145 },
  { product: "Spülmaschine", price: 200 },
]

// eine Summe berechnen über den ganzen Array OHNE reduce
// let sum = 0 
// for(let sale of salesInMonth) {
//   sum += sale.price
// }
// console.log( { sum })

console.log()


const sum = salesInMonth.reduce((presum, salesItem) => {
  return presum + salesItem.price
}, 0) // set 0 as start value for variable "sum"

console.log( { sum } )


const summe = [ 3,2,1 ].reduce((sum, item) => {
  console.log(sum, item)
  return sum + item
}, 0)

console.log( {summe} )



// blog posts

const posts = [
  { title: "Reduce in action", author: "Rob" },
  { title: "Reduce default values", author: "Mehmet" },
  { title: "Higher Order Functions", author: "Mehmet" },
]

// EXPECTED => alle unique authors in meinem Blog
// summe => [ "Rob", "Mehmet" ] => Initial value: []

const uniqueAuthors = posts.reduce( (authors, post) => {
  let author = post.author

  if(!authors.includes( author )) {
    authors.push( author )
  }

  return authors
}, []) // [ 'Rob', 'Mehmet']

console.log({ uniqueAuthors })


// von den usern => gib mir alle ADMINS => filter
// gib mir von allen ADMINS => nur die Namen => map



const adminEmails = users
.filter(( user ) => {
  return user.admin 
})
.map(( user ) => {
  return user.email
})
// [ Zubia, Mojdeh ]


console.log( { adminEmails } )