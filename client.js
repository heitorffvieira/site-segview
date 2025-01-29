const btnAuvo = document.getElementById('auvo-ler-mais');
btnAuvo.addEventListener('click', () => {

    btnAuvo.style.display = 'none';
    btnMenosAuvo.style.display = 'block';

    let paragrafos = document.querySelectorAll('.mais-texto-c4');
    paragrafos.forEach(paragrafo => {
        paragrafo.style.display = 'block';
    });

});

const btnMenosAuvo = document.getElementById('auvo-ler-menos');
btnMenosAuvo.addEventListener('click', () => {

    btnMenosAuvo.style.display = 'none';
    btnAuvo.style.display = 'block';

    let paragrafos = document.querySelectorAll('.mais-texto-c4');
    paragrafos.forEach(paragrafo => {
        paragrafo.style.display = 'none';
    });

})

const btnDefense = document.getElementById('defense-ler-mais');
btnDefense.addEventListener('click', () => {

    btnDefense.style.display = 'none';
    btnMenosDefense.style.display = 'block';

    document.getElementById('paragrafo-defense').style.display = 'block';

})

const btnMenosDefense = document.getElementById('defense-ler-menos');
btnMenosDefense.addEventListener('click', () => {

    btnMenosDefense.style.display = 'none';
    btnDefense.style.display = 'block';

    document.getElementById('paragrafo-defense').style.display = 'none';

})

const elementosScroll = document.querySelectorAll('.hidden');
const scrollLerMais = document.querySelectorAll('.hidden-ler');
const scrollInverso = document.querySelectorAll('.hidden-ler-inverso');
const scrollHidden2 = document.querySelectorAll('.hidden-2');

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
});

elementosScroll.forEach((elemento) => myObserver.observe(elemento));
scrollLerMais.forEach((ler) => myObserver.observe(ler));
scrollInverso.forEach((inverso) => myObserver.observe(inverso));
scrollHidden2.forEach((hidden2) => myObserver.observe(hidden2));

const observerMenu = new IntersectionObserver((entriesMenu) => {
    entriesMenu.forEach((entryMenu) => {
        if (entryMenu.isIntersecting){
            entryMenu.target.classList.add('show-mobile')
        } else {
            entryMenu.target.classList.remove('show-mobile')
        }
    })
});

const menuElementos = document.querySelectorAll('.hidden-menu');
menuElementos.forEach((elementoMenu) => observerMenu.observe(elementoMenu));

document.addEventListener('scroll', function () {
    const menu = document.getElementById('cabecalho');
    const itensMenu = document.getElementById('menu-cabecalho');
    const logo = document.getElementById('logo');
    const fecharSimbolo = document.getElementById('fechar-menu-mobile');
    const abrirSimbolo = document.getElementById('simbolo-menu-mobile');

    if (window.scrollY > 50) { 
        menu.classList.add('cabecalho-sticky');
        itensMenu.classList.remove('menu-cabecalho');
        itensMenu.classList.add('menu-cabecalho-sticky');
        logo.classList.remove('logo');
        logo.classList.add('logo-sticky');
    } else {
        menu.classList.remove('cabecalho-sticky');
        itensMenu.classList.add('menu-cabecalho');
        itensMenu.classList.remove('menu-cabecalho-sticky');
        logo.classList.add('logo');
        logo.classList.remove('logo-sticky');
    }

    if (window.matchMedia("(max-width: 992px)").matches) {
        menuMobile.style.display = 'none';
        fecharSimbolo.style.display = 'none';
        abrirSimbolo.style.display = 'block';
    }
});

const menuPc = document.getElementById('menu-cabecalho');
const simboloAbrirMenu = document.getElementById('simbolo-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');
const simboloFechar = document.getElementById('fechar-menu-mobile');

function toggleMenu() {
    if (window.matchMedia("(max-width: 992px)").matches) {
        menuPc.style.display = "none"; 
        simboloAbrirMenu.style.display = 'block';

        btnAuvo.style.display = 'block';
        btnDefense.style.display = 'block';

        let paragrafos = document.querySelectorAll('.mais-texto-c4');
        paragrafos.forEach(paragrafo => {
            paragrafo.style.display = 'none';
        });

        document.getElementById('paragrafo-defense').style.display = 'none';


    } else {
        menuPc.style.display = "flex";
        simboloAbrirMenu.style.display = 'none';
        menuMobile.style.display = 'none';
        simboloFechar.style.display = 'none';

        btnAuvo.style.display = 'none';
        btnMenosAuvo.style.display = 'none';
        btnMenosDefense.style.display = 'none';
        btnDefense.style.display = 'none';

        let paragrafos = document.querySelectorAll('.mais-texto-c4');
        paragrafos.forEach(paragrafo => {
            paragrafo.style.display = 'block';
        });

        document.getElementById('paragrafo-defense').style.display = 'block';

    }
}

const simboloMenuMobile = document.getElementById('simbolo-menu-mobile');
const simboloFecharMenu = document.getElementById('fechar-menu-mobile');
const itensMenu = document.querySelectorAll('.item-mobile a');

function abrirMenu() {
    menuMobile.style.display = 'block';
    simboloMenuMobile.style.display = 'none';
    simboloFecharMenu.style.display = 'block';
}

function fecharMenu() {
    menuMobile.style.display = 'none'
    simboloFecharMenu.style.display = 'none';
    simboloMenuMobile.style.display = 'block';
}

toggleMenu();
window.addEventListener("resize", toggleMenu);

const mediaQuery = window.matchMedia("(max-width: 992px)");
mediaQuery.addEventListener("change", handleScreenChange);
handleScreenChange(mediaQuery);

function redirecionamento(){
    menuMobile.style.display = 'none';
    simboloMenuMobile.style.display = 'block';
    simboloFecharMenu.style.display = 'none';
}

function saibaMais(){

    let msg = 'Olá, vim pelo site oficial da Segview e gostaria de saber sobre o Defense! =)'; 
    let url = 'https://wa.me/+5579991391714?text=';

    window.open(url + msg, '_blank')

}