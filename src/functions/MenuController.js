const setupMenuItems = () => {
    const itens = document.querySelectorAll('.menuItem');
    itens.forEach((item) => {
        item.addEventListener('click', () => {
            menuControll();
        });
    });
}
const menuControll = () => {
    const menu = document.querySelector('.menuItens');
    menu.classList.toggle('menu-ativo');
    setupMenuItems();
}
export default menuControll;