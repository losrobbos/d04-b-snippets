const button = document.querySelector('button');
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// ASYNC AWAIT (andere Schreibweise)
// async function prevents BLOCKING of other other listeners in browser
button.addEventListener('click', async () => {
  console.log('Button clicked');

  // await keyword BLOCKS (!) Javascript in the browser!
  // so we only can call await inside an async (!) function
  // to make sure this function as a whole does not block any other functions

  try {
    const response = await fetch(API_URL);
    console.log(response);
    // please wait until response RETURNED something
    const daten = await response.json();
    console.log(daten);
  } 
  catch (err) {
    console.log('OUTCH: ', 'Dein Internet scheint nicht so zu funktionieren wie sonst');
  }
});
