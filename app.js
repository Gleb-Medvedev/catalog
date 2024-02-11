let dataBase;

async function getDataBase() {
    let response = await fetch('http://localhost:3000/products');
    let data = await response.json();

    dataBase = data;
}

document.addEventListener('DOMContentLoaded', async () => {
    await getDataBase();
    renderProducts(dataBase);
})

function renderProducts(productList) {
    if (!productList || productList.length === 0) {
        alert('Ошибка базы данных!');
        return;
    }

    const catalog = document.querySelector('.catalog');

    for (const product of productList) {
        const tempProduct = document.createElement('div');

        tempProduct.classList.add('catalog-item');
        tempProduct.title = product.name;
        tempProduct.dataset.id = product.id;

        tempProduct.insertAdjacentHTML('beforeend', 
            `
            <p><span>Название: </span>${product.name}</p>
            <div class="catalog-item__img-container"><img src="${!product.image ? product.image = 'hz.jpg' : product.image}" alt="Изображение игры ${product.name}"></div>
            <p><span>Стоимость: </span>${product.price}</p>
            <p><span>Наличие: </span>${product.quantity === 0 ? textContent = 'Нет в наличии!' : textContent = 'В наличии!'}</p>

            `
        )

        catalog.append(tempProduct);
    }
}