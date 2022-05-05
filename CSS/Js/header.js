let activeSearch = document.getElementById("img-search")
let searchText = document.querySelector(".searchText")
let searchBar = document.querySelector(".search")


activeSearch.addEventListener('click', functionActive)

function functionActive(){
      
    searchText.classList.toggle('txtActive')
    searchBar.classList.toggle('activeBar')
}