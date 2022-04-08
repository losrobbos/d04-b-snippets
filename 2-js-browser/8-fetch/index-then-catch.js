const button = document.querySelector('button');
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// THEN CATCH EXAMPLE
button.addEventListener('click', () => {
  console.log('Button clicked');

  const promResponse = fetch(API_URL);

  // please wait until response RETURNED something
  promResponse
    .then((response) => {
      console.log(response);

      // PARSE the content of the response
      const promiseData = response.json(); // call the JSON parser

      // EXTRACT the data from the promise
      promiseData.then((todos) => {
        console.log('A', todos);
      });

      console.log('B: I do something else');
    })
    // HANDLE errors during fetching
    .catch((err) => {
      // console.log("OUTCH: ", err.message)
      console.log('OUTCH: ', 'Dein Internet scheint nicht so zu funktionieren wie sonst');
    });
});

