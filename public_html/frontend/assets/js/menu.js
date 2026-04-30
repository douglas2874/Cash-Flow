export function toggleMenu(){
    const menu = document.querySelector('#menu-mobile');
    
    if(menu){
        menu.classList.toggle('active');
    }
}

export function closeMenu(){
    const menu = document.querySelector('#menu-mobile');
    
    if(menu){
        menu.classList.remove('active');
    }
    
}