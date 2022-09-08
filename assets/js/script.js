// NAVBAR CHANGEMENT DE COULEUR AU SCROLL
const navigation = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY > 160){
         navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');
    }
 })
// NAVBAR FERMETURE AU CLICK SUR UN LIEN  EN MODE MOBILE
  window.addEventListener('DOMContentLoaded', event => {

    // Réduction de la taille au scroll et fil d'ariane
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // RÃ©duire la barre de navigation 
    navbarShrink();

    // RÃ©duire la barre de navigation lors du dÃ©filement de la page
    document.addEventListener('scroll', navbarShrink);

    //Activez Bootstrap scrollspy sur l'Ã©lÃ©ment de navigation principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // RÃ©duire la barre de navigation rÃ©active lorsque le basculeur est visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});