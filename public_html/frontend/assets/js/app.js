console.log('app.js carregou');
/* import { toggleMenu } from '../js/menu.js';

const btnMenu = document.querySelector('.menu_sanduiche');

if (btnMenu){
    btnMenu.addEvenListener('click', toggleMenu);
} */

import { toggleMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado');

    const btnMenu = document.querySelector('.menu_sanduiche');

    if (btnMenu) {
        console.log('Botão encontrado');

        btnMenu.addEventListener('click', () => {
            console.log('Clicou no botão');
            toggleMenu();
        });
    } else {
        console.log('Botão NÃO encontrado');
    }
});