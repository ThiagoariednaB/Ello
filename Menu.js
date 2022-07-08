let show = true
const menuSection = document.querySelector('.menu1')
const menuBurguer = menuSection.querySelector('.menuBurguer')
menuBurguer.addEventListener('click', () => {
  menuSection.classList.toggle('on', show)
  show = !show
})//Controla a ativação e desativação do MenuBurguer