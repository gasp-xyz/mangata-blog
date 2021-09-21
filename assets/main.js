// document query .signup-button
const signup_button = document.querySelector('.signup-button')
const signup_input = document.querySelector('.signup-input')

if (signup_button) {
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
    fetch('https://testnode.mangata.finance:3067', {
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
}

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

// Header scroll interaction
const header = document.getElementById('site-header')
const headerCta = document.getElementById('header-cta')

if (header) {
  header.style.setProperty('--cta-width', headerCta ? `${headerCta.offsetWidth}px` : '120px')
}

const showCta = () => {
  if (!header) return

  header.classList.add(['withCta'])
}

const hideCta = () => {
  if (!header) return

  header.classList.remove(['withCta'])
}

const handleScroll = () => {
  if (window.innerWidth <= 600) {
    showCta()

    return
  }

  const headerChangeThreshold = (window.innerHeight / 5) * 4

  if (window.scrollY > headerChangeThreshold) {
    showCta()
  } else {
    hideCta()
  }
}

// Set header to correct state on first load
handleScroll()

// And then start listening for scroll and resize events
document.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleScroll)

// Display correct logo (mobile/desktop)
const logo = document.querySelector('#site-header .logo img')

const setHeaderLogo = () => {
  if (logo) {
    if (window.innerWidth <= 600) {
      logo.src = '/assets/images/logo-mobile.png'
    } else {
      logo.src = '/assets/images/logo.svg'
    }
  }
}

setHeaderLogo()

window.addEventListener('resize', setHeaderLogo)
