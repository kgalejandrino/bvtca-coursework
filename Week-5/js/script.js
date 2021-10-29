const openMenuIcon = document.querySelector(".js--menu");
const closeMenuIcon = document.querySelector(".close-menu");
const collapseNav = document.querySelector(".js--collapse-nav");
const navUl = document.querySelector('ul');


openMenuIcon.addEventListener('click', () => {
    collapseNav.style.display = "block";
    closeMenuIcon.style.display = "block";
    navUl.classList.remove('nav-ul');
    navUl.classList.add('js--nav-ul');
    document.querySelector('body').style.overflow = "hidden";
});

closeMenuIcon.addEventListener('click', () => {
    collapseNav.style.display = "none";
    closeMenuIcon.style.display = "none";
    navUl.classList.add('nav-ul');
    navUl.classList.remove('js--nav-ul');
    document.querySelector('body').style.overflow = "auto";
});



