// Example Products
const products = [
    { name: 'Paint Set', category: 'paint', price: 20, rating: 4.5,  image: "https://5.imimg.com/data5/SELLER/Default/2023/10/354311438/BE/CO/ZY/201062518/p1-500x500.jpg"},
    { name: 'Crafting Tools', category: 'tools', price: 15, rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHrb-bUcDoYx-20eDcwXBSubmPfqf2b5Erw&s"},
    { name: 'Glitter Pack', category: 'accessories', price: 5, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqgPnkFn4u036kTanOwayVRHB0UK4kGn6cw&s" },
    { name: 'Brush Set', category: 'paint', price: 10, rating: 4.8, image: "https://static-01.daraz.lk/p/09112edb3a553aeb2fba6e06de352c6b.jpg"},
    { name: 'Crafting Glue', category: 'tools', price: 7, rating: 4.2, image: "https://content.jdmagicbox.com/rep/b2b/craft-glue/craft-glue-10.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"},
    { name: 'Craft Supplies', category: 'accessories', price: 25, rating: 4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsuT2THJd9kfK3RSBs6m9-4H7i2QXD83-Mg&s"}
];

const productContainer = document.querySelector('.product-listing');
const categoryFilter = document.getElementById('category');
const sortFilter = document.getElementById('sort');

// Function to render products
function renderProducts(filteredProducts) {
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Filter and sort functionality
categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const filteredProducts = products.filter(product => 
        selectedCategory === 'all' || product.category === selectedCategory
    );
    renderProducts(filteredProducts);
});

sortFilter.addEventListener('change', () => {
    const sortBy = sortFilter.value;
    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'rating') {
            return b.rating - a.rating;
        }
    });
    renderProducts(sortedProducts);
});



// Initial render
renderProducts(products);