console.log('Hey, this script is alive! ');

// ARRAY DESTRUCTURING

const kitchen = [ 'waschmaschine W', 'spuele S', 'kuehlschrank K', 'toaster T', 'kaffeemaschine K' ];

// const waschmaschine = kitchen[0]
// const spuele = kitchen[1]

// deconstructuring => pluck someting out of something else
const [ waschmine, spueli, kuehli, ...rest  ] = kitchen;

// waschmine => kitchen[0]
// spueli => kitchen[1]

console.log({ waschmine });
console.log({ spueli });
console.log({ kuehli });
console.log( rest );


// OBJECT DESCTRUCTURING

const user = {
  email: "rob@rob.com",
  username: "losrobbos",
  password: "rob123",
  role: "Admin"
}

// deletes from ORIGINAL !
// delete user.password
// console.log( user )

// pluck something out of an OBJECT using curly braces
const { email, role, username } = user

console.log( email, role, username )


// REST destructuring
const { password, ...userPublic } = user

console.log( userPublic )
console.log( user )