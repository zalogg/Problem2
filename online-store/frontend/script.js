document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productStock = document.getElementById('productStock').value;
  
    const product = {
      id: productId,
      name: productName,
      price: parseFloat(productPrice),
      stock: parseInt(productStock)
    };
  
    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product added:', data);
      // Limpiar campos del formulario
      document.getElementById('productId').value = '';
      document.getElementById('productName').value = '';
      document.getElementById('productPrice').value = '';
      document.getElementById('productStock').value = '';
  
      loadProducts();
    })
    .catch(error => console.error('Error:', error));
  });
  
  function loadProducts() {
    fetch('/products')
      .then(response => response.json())
      .then(data => {
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        data.forEach(product => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>${product.id}: ${product.name}</strong><br>
            <em>Precio: ${product.price} - Stock: ${product.stock}</em><br>
          `;
          const updateButton = document.createElement('button');
          updateButton.textContent = 'Actualizar';
          updateButton.classList.add('update');
          updateButton.onclick = () => updateProduct(product.id);
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.classList.add('delete');
          deleteButton.onclick = () => deleteProduct(product.id);
          li.appendChild(updateButton);
          li.appendChild(deleteButton);
          productList.appendChild(li);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  function updateProduct(id) {
    const newProductName = prompt('Enter new product name:');
    if (newProductName) {
      fetch(`/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, name: newProductName })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Product updated:', data);
        loadProducts();
      })
      .catch(error => console.error('Error:', error));
    }
  }
  
  function deleteProduct(id) {
    fetch(`/products/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product deleted:', data);
      loadProducts();
    })
    .catch(error => console.error('Error:', error));
  }
  
  loadProducts();
  