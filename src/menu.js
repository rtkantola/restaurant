const items = [
    {   
        name: "Red Pizza",
        description: "It has a red sauce"
    },
    {
        name: "BBQ pizza",
        description: "Chicken on a pizza"
    },
    {
        name: "Meatball Pizza",
        description: "Not a great combination"
    },
    {
        name: "Pizza Al Formaggi",
        description: "Infinite cheese"
    }
    
]

const menuPage = function() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');

    
    items.forEach(food => {
        menuContainer.appendChild(createItem(food));
    });
    
    content.appendChild(menuContainer);

    return content;
}
const createItem = function(item) {

    const itemContainer = document.createElement('div');
    itemContainer.classList = "itemContainer";
    const name = document.createElement('h3');
    name.textContent = item.name

    const description = document.createElement('p');
    description.textContent = item.description;

    itemContainer.appendChild(name);
    itemContainer.appendChild(description);

    return itemContainer;

}



export { menuPage };