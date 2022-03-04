// HIGHER ORDER ARRAY FUNCTIONS

// forEach => Use Case: Loope durch ALLE Items und MACH ETWAS mit jedem Item => AUSGEBEN oder AUSFÜHREN!

const users = [
  { name: 'Zubia', email: 'zubia@zubia.com', admin: true },
  { name: 'Marion', email: 'marion@marion.com', admin: false }
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
