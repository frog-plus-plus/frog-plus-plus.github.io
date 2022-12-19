// Get the HTML div containing the list of items
const itemList = document.querySelector('#itemList')

// Create the behind-the-scenes array containing the list of items
let itemListArray = [];

// Code to close the description menu
const descriptionBox = document.querySelector('#descriptionBox');
const closeDescriptionBox = document.querySelector('#closeDescriptionBox');
closeDescriptionBox.onclick = () => {
    descriptionBox.style.display = 'none';
};

// Create the HTML elements for each PC item
function createPCItemElement(listIndex) {

    // Create Elements
    // ---------------

    // Main Item
    const newPCItem = document.createElement('div');
    newPCItem.className = 'pcItem';

    // Div containing the name
    const itemNameDiv = document.createElement('div');
    itemNameDiv.className = 'pcItemNameDiv';
    newPCItem.appendChild(itemNameDiv);

    // Text showing the name
    const itemNameText = document.createElement('h4');
    itemNameText.className = 'pcItemName';
    itemNameText.textContent = itemListArray[listIndex]['name'];
    itemNameDiv.appendChild(itemNameText);
    
    // Div containing the price and button to show the description
    const itemRightDataDiv = document.createElement('div');
    itemRightDataDiv.className = 'pcItemRightData';
    newPCItem.appendChild(itemRightDataDiv);

    // Text showing the price
    const itemPriceText = document.createElement('h4');
    itemPriceText.className = 'pcItemPrice';
    // The pound (£) sign has a strange character beside it for some reason if I don't put the unicode
    itemPriceText.textContent = '\u00A3' + itemListArray[listIndex]['price'];
    console.log("Item Price Text: " + itemPriceText.textContent);
    itemRightDataDiv.appendChild(itemPriceText);

    // Button to show the description
    const itemDescriptionButton = document.createElement('button');
    itemDescriptionButton.className = 'pcItemShowDescription';
    itemDescriptionButton.textContent = '?';
    itemRightDataDiv.appendChild(itemDescriptionButton);
    
    // Callback for when the SHOW DESCRIPTION button is clicked
    itemDescriptionButton.onclick = () => {
        const descriptionText = document.querySelector('#descriptionText');
        descriptionText.textContent = itemListArray[listIndex]['description'];
        descriptionBox.style.display = 'block';
    };

    return newPCItem;
}

// Function to call when adding a PC item
function addPCItem(name, description, price) {
    let itemAmount = itemListArray.push({
        'name': name,
        'description': description,
        'price': price
    });
    const pcItemElement = createPCItemElement(itemAmount - 1);
    itemList.appendChild(pcItemElement);
}

// Callbacks for when the ADD button is pressed
// --------------------------------------------
const addItemButton = document.querySelector('#addItem');
const removeItemButton = document.querySelector('#removeItem');
const nameField = document.querySelector('#nameField');
const descriptionField = document.querySelector('#descriptionField');
const priceField = document.querySelector('#priceField');

addItemButton.onclick = () => {
    if (nameField.value != '' && descriptionField.value != '' && priceField.value != '') 
    {
        addPCItem(nameField.value, descriptionField.value, priceField.value);
    }
};
