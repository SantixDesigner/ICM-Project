let btnHamburguesa = document.getElementById('btnSelec');
btnHamburguesa.addEventListener('click',(e)=>{
    let ulNav = document.getElementById('ul-nav');
    ulNav.classList.toggle('show');
});

let liId = document.getElementById('liId');

liId.addEventListener('click',(e)=>{
    let ulNav = document.getElementById('btnSelec2');
    ulNav.classList.toggle('showS');
})
