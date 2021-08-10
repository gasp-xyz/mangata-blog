// document query .signup-button

const signup_button = document.querySelector('.signup-button')
const signup_input = document.querySelector('.signup-input')
console.log('signup_button', signup_button)

signup_button.addEventListener('click', (e) => {
  e.preventDefault()

  // Get email from the input
  const email = signup_input.value

  console.log('email', email)

  const isValid = validateEmail(email)

  if (!isValid) {
    errorFlash()
    return
  }

  // fetch with post method and email body
  fetch('http://testnode.mangata.finance:3066', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  }).then((response) => {
    console.log('response.ok', response.ok)
    // Check if the response is ok
    if (response.ok) {
      console.log('response ok')
      // Hide the signup button
      //   signup_button.style.display = 'none'
      signup_button.innerHTML = '✅'
      signup_input.value = 'Please check your inbox for confirmation'
    } else {
      console.log('response not ok')
      errorFlash()
    }
  })
})

const errorFlash = () => {
  //add error class to the input
  document.querySelector('.signup-input').classList.add('error')
  //remove error class from the input
  setTimeout(() => {
    document.querySelector('.signup-input').classList.remove('error')
  }, 100)
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}
