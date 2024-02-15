let actively = document.querySelector('.actively')
let navbar = document.getElementById('navbar')

actively.addEventListener('click',()=>{
    let navbarchanges = navbar.classList;
    navbarchanges.toggle('navplus')
})
