const formular = document.querySelector('form')

const odebirat = (event) => {
	event.preventDefault()
	const input = document.querySelector('input')
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

const textField = document.querySelector(".email")
textField.addEventListener ("input", (event) => {
  const text = event.target.value.trim()

  if ((text==="") || (text.indexOf("@") === -1)) {
    textField.classList.add("red");
  } else {
    textField.classList.remove("red");
    formular.addEventListener('submit', odebirat);
  }
})