const menuPage = function() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');

    menuContainer.textContent = "Ruoka menua jajaja";
    content.appendChild(menuContainer);

    return content;
}

export { menuPage };