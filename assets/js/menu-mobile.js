// Função para modificar ícone do menu mobile
const menuMobileShow = () => {
    let menu = document.getElementById("menu");
    let menuIcon = document.getElementById("menu-icon");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuIcon.src = "assets/img/icons-menu.png";
    } else {
        menu.style.display = "block";
        menuIcon.src = "assets/img/icons-menuClosed.png";
    }
}