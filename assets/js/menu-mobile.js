// Função para modificar ícone do menu mobile
const menuMobileShow = () => {
    let menu = document.querySelector('.nav-menuMobileLink')
    let menuIcon = document.querySelector(".menu-icon");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuIcon.src = "assets/img/icons-menu.png";
    } else {
        menu.style.display = "block";
        menuIcon.src = "assets/img/icons-menuClosed.png";
    }
}