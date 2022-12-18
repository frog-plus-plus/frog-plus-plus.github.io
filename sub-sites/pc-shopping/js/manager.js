const itemList = document.getElementById("itemList");

let itemListArray = [];

function createPCItemElement(listIndex) {
    let newPCItem = document.createElement('div');
    newPCItem.className = 'pcItem';

    let itemNameDiv = document.createElement('div');
    let itemRightDataDiv = document.createElement('div');
    itemNameDiv.className = 'pcItemNameDiv';
    itemRightDataDiv.className = 'pcItemRightData';
    itemNameDiv.parentElement = newPCItem;
    itemRightDataDiv.parentElement = newPCItem;

    let itemNameText = document.createElement('h4');
    itemNameText.className = 'pcItemName';
    itemNameText.textContent = itemListArray[listIndex]['name'];
    itemNameText.parentElement = itemNameDiv;

    let itemPriceText = document.createElement('h4');
    itemPriceText.className = 'pcItemPrice';
    itemPriceText.textContent = '£' + itemListArray[listIndex]['price'];
    itemPriceText.parentElement = itemRightDataDiv;
    return newPCItem;
}

function addPCItem(name, description, price) {
    let itemAmount = itemListArray.push([{
        'name': name,
        'description': description,
        'price' : price
    }]);
    let pcItemElement = createPCItemElement(itemAmount - 1);
    pcItemElement.parentElement = itemList;
    console.log(pcItemElement.parentElement);
}

