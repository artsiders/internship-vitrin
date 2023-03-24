/***************** Splashscreen ******************/

const splashscreen = document.querySelector('.splashscreen')

window.addEventListener('load', () => {
	
	splashscreen.classList.add('splashscreen--is-hidden')

	setTimeout(() => { splashscreen.style.display = 'none' }, 1000)
})

/***************** Responsive Nav ******************/

const navigationBurger = document.querySelector('.navigation__burger')
const navigationContainer = document.querySelector('.navigation__container')
const html = document.querySelector('html')
const body = document.querySelector('body')

navigationBurger.addEventListener('click', () => {
	navigationToggle()
})

const navigationToggle = () => {
	navigationBurger.classList.toggle('navigation__burger--is-open')
	navigationContainer.classList.toggle('navigation__container--is-open')
	html.classList.toggle('scroll-lock')
	body.classList.toggle('scroll-lock')
}

/***************** Work Carousel ******************/

const workNavigationEls = document.querySelectorAll('.work__navigation-el')
const workListEls = document.querySelectorAll('.work__list-el')
let positionPoint, positionDiv

workNavigationEls.forEach((workNavigationEl, key) => {
	workNavigationEl.addEventListener('click', (e) => {
		positionPoint = key
		workNavigationEls.forEach((e, key) => {
			if (e.classList.contains('work__navigation-el--is-active')) e.classList.remove('work__navigation-el--is-active')
		})

		workNavigationEl.classList.add('work__navigation-el--is-active')

		workListEls.forEach((workListEl, key) => {
			workListEls.forEach((e, key) => {
				
				if (e.classList.contains('work__list-el--is-active')) e.classList.remove('work__list-el--is-active')

				workListEls.forEach((workListEl, key) => {
					if (key === positionPoint) workListEl.classList.add('work__list-el--is-active')
				})
			})
		})
	})
})

/*****************  ******************/

// const workVisuals = document.querySelectorAll('.work__visual')

// workVisuals.forEach((workVisual) => {
// 	workVisual.addEventListener('mousemove', () => {
// 		console.log(window.scroll)
// 	})
// })