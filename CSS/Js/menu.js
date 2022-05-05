hamburguer = document.querySelector('.hamburguer')
menu = document.querySelector('.menu')


hamburguer.addEventListener('click', functionActive)

function functionActive(){
      
         menu.classList.toggle('active')

}