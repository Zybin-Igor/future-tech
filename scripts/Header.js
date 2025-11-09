

//обращение к селекторам (selectors - объектам) уменьшает количество ошибок в коде не обращаясь к строкам.

class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
	}


	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		 if (!this.rootElement) {
        console.warn('Header element not found. Skipping initialization.')
        return
    }
		this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
		this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
		this.bindEvents()
	}

onBurgerButtonClick = () => {
	this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
	this.overlayElement.classList.toggle(this.stateClasses.isActive)
	document.documentElement.classList.toggle(this.stateClasses.isLock)
}

	//привязка событий к разным дом элемментам для обработки браузерных событий
	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
	}
}

export default Header;