const contactForm = document.getElementById('contact-form')
const contactFormInfo = document.querySelector('.contact__form-info')
const btnSubmit = document.querySelector('.btn_submit')

// console.log(contactForm)


contactForm.addEventListener('submit', function (e) {

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  e.preventDefault()

  btnSubmit.value = 'Chargement ...'

  // const addComportement = (class, message) => {
  //   contactFormInfo.classList.add('contact__form-info--success')
  //   contactFormInfo.innerHTML = 'email envoyer !'
  //   btnSubmit.value = 'Envoyer'
  // }

  try {
    emailjs.send("service_snqenkg", "template_29fkhbj", {
      name: name,
      from_name: email,
      message: message,
    })
      .then(() => {
        contactFormInfo.classList.add('contact__form-info--success')
        contactFormInfo.innerHTML = 'email envoyer !'
        btnSubmit.value = 'Envoyer'
      }, (err) => {
        contactFormInfo.classList.add('contact__form-info--danger')
        contactFormInfo.innerHTML = 'un Probleme est survenue recomencer !'
        btnSubmit.value = 'Envoyer'
      })
  } catch (error) {
    contactFormInfo.classList.add('contact__form-info--danger')
    contactFormInfo.innerHTML = 'Connexion a l\'api impossible !'
    btnSubmit.value = 'Envoyer'
    setTimeout(() => {
      contactFormInfo.classList.add('contact__form-info--remove')
      setTimeout(() => {
        contactFormInfo.classList.remove('contact__form-info--success')
        contactFormInfo.classList.remove('contact__form-info--danger')
        contactFormInfo.classList.remove('contact__form-info--remove')
        contactFormInfo.innerHTML = ''
      }, 1000)
    }, 3000)
  }
})