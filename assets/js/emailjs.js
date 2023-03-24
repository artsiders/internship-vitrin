const contactForm = document.getElementById('contact-form')
const contactFormInfo = document.querySelector('.contact__form-info')

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
        contactFormInfo.classList.add('contact__form-info--success')
        contactFormInfo.innerHTML = 'email envoyer !'
      }, (err) => {
        contactFormInfo.classList.add('contact__form-info--danger')
        contactFormInfo.innerHTML = 'un Probleme est survenue recomencer !'
      })
  } catch (error) {
    contactFormInfo.classList.add('contact__form-info--danger')
    contactFormInfo.innerHTML = 'Connexion a l\'api impossible !'
    setTimeout(() => {
      contactFormInfo.classList.add('contact__form-info--remove')
    }, 4000)
    setTimeout(() => {
      contactFormInfo.classList.remove('contact__form-info--success')
      contactFormInfo.classList.remove('contact__form-info--danger')
      contactFormInfo.classList.remove('contact__form-info--remove')
        contactFormInfo.innerHTML = ''
    }, 5000)
  }
})