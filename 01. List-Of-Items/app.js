function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');

    const newItem = document.createElement('li');

    if (input.value !== '') {
        items.appendChild(newItem);
    }
    newItem.textContent = input.value;
    input.value = '';
}