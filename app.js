fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => renderProductApi(data))

var inputSearch = document.querySelector(".seach-input");
var productList = document.querySelector(".product-list");

function renderProductApi(data) {
    data.forEach(item => {
        var productItem = document.createElement("li");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
                    <div class="img-product">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="product-detail">
                        <span class="product-name">${item.title}</span>
                        <span class="price-name">${item.price}</span>
                    </div>`
        productList.appendChild(productItem);
    });
};

var search = document.querySelector('input');
search.addEventListener('input', function(event) {
    var textSearch = event.target.value.trim().toLowerCase();
    var listProductDOM = document.querySelectorAll('.product-list li');
    listProductDOM.forEach(product => {
        if(product.innerText.toLowerCase().includes(textSearch)) {
            product.classList.remove('hide');
        } else {
            product.classList.add('hide');
        }
    })
})


