function deleteByEmail() {
    const table = document.getElementById('customers');
    const result = document.getElementById('result');
    const input = document.querySelector('[name="email"]');
    const rows = document.querySelectorAll('tbody tr');
    const arr = Array.from(rows);
    
    for (let i = 0; i < arr.length; i++) {
        const email = arr[i].children[1].textContent;
        
        if (input.value === email) {
            arr[i].remove();
            result.textContent = 'Deleted.';
            input.value = '';
            return;
        } else {
            result.textContent = 'Not found.';
        }
    }

    input.value = '';
}