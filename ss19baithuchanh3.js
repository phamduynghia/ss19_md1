let items = [
    'Backpack',
    'MiBand watch',
    'Ring'
  ];
  const itemList = document.getElementById('item-list');

  function renderItems() {
    itemList.innerHTML = ''; 
    
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeItem(index);
      });
      
      li.appendChild(removeButton);
      itemList.appendChild(li);
    });
  }

  renderItems(); 
  const addButton = document.getElementById('add-button');

  addButton.addEventListener('click', () => {
    const newItemInput = document.getElementById('new-item');
    const newItemValue = newItemInput.value.trim();
    if (newItemValue !== '') {
      items.push(newItemValue);
      renderItems(); 
      newItemInput.value = ''; 
    }
  });
  function removeItem(index) {
    items.splice(index, 1);
    renderItems(); 
  }