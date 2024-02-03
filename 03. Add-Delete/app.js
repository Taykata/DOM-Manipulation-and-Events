function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');

    const newItem = document.createElement('li');
    
    if (input.value !== '') {
        items.appendChild(newItem);
    }
    newItem.textContent = input.value;
    input.value = '';

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    newItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', onClick);

    function onClick() {
        items.removeChild(newItem);
    }
}