const contactForm = document.getElementById('contact-form')

// console.log(contactForm)


contactForm.addEventListener('submit', function (e) {

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  e.preventDefault()

  try {
    emailjs.send("service_snqenkg", "template_29fkhbj", {
      name: name,
      from_name: email,
      message: message,
    })
      .then(() => {
        alert('email envoyer !')
      }, (err) => {
        alert('un Probleme est survenue recomencer !')
      })
  } catch (error) {
    alert('Connexion a l\'api impossible !')
  }
})