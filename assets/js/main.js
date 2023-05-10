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