const openMenuRegister = document.getElementById('openRegister')
const closeMenuRegister = document.getElementById('closeRegister')
const registerMenuSidebar = document.querySelector('.register')

const showMenuRegister = () => {
    registerMenuSidebar.style.right = '0'
}

const hideMenuRegister = () => {
    registerMenuSidebar.style.right = '-100%'
}

openMenuRegister.addEventListener('click', showMenuRegister)
closeMenuRegister.addEventListener('click', hideMenuRegister)

const openMenuCountryBtn = document.getElementById('openMenuCountry')
const CloseMenuCountryBtn = document.getElementById('closeMenuCountry')
const menuCountry = document.querySelector('.country__container')

const showCountry = () => {
    menuCountry.style.bottom = '0'
}

const hideCountry = () => {
    menuCountry.style.bottom = '-100%'
}

openMenuCountryBtn.addEventListener('click', showCountry)
CloseMenuCountryBtn.addEventListener('click', hideCountry)