let themeToggler = document.querySelector('.themeToggler');
let body = document.querySelector('body');


themeToggler.addEventListener('click', function(){
    this.classList.toggle('active');
    body.classList.toggle('active');
})