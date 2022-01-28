console.log('Yayyyyy, das klappt!');
const button = document.querySelector('button');


// Event Listener (Click)

button.addEventListener("click", () => {
  console.log(button);
  // button.style.backgroundColor = 'green';
  // button.classList.add("active")
  button.classList.toggle("active")
})