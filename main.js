window.addEventListener('scroll', ()=>{
    let navBar = document.getElementById('navBar')
    navBar.classList.toggle('abajo', window.scrollY>0)
})