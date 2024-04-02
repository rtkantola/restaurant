

const homePage = function() {
    
    const content = document.getElementById('content');

    const nameContainer = document.createElement('div');
    nameContainer.classList = 'nameContainer';

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = 'Pizza Placeholderino'

    const welcomeMessage = document.createElement('p');
    const informationMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome to the home of tasty placeholders'
    informationMessage.textContent = 'Please use the buttons above to view our menu or how to contact us';
    

    nameContainer.appendChild(restaurantName);
    nameContainer.appendChild(welcomeMessage);
    nameContainer.appendChild(informationMessage);

    

    
    content.appendChild(nameContainer);

    return content;
}

export { homePage };
