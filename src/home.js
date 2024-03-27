import './style.css';

const homePage = function() {
    const content = document.getElementById('content');

    const nameContainer = document.createElement('div');
    nameContainer.classList = 'nameContainer';

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = 'Pizza Placeholderino'

    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome to the home of tasty placeholders'

    nameContainer.appendChild(restaurantName);
    nameContainer.appendChild(welcomeMessage);

    
    content.appendChild(nameContainer);

    return content;
}

export { homePage };
