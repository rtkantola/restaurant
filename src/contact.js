const contactPage = function() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');

    menuContainer.textContent = "yhteysTiedot jajaja";
    content.appendChild(menuContainer);

    return content;
}

export { contactPage };