document.addEventListener("DOMContentLoaded", function () {
    const filterCategory = document.getElementById("filter-category");
    const searchProduct = document.getElementById("search-product");
    const productList = document.getElementById("product-list");
    const products = document.querySelectorAll(".product");

    filterCategory.addEventListener("change", filterProducts);
    searchProduct.addEventListener("input", searchProducts);

    function filterProducts() {
        const selectedCategory = filterCategory.value;

        products.forEach((product) => {
            const productCategory = product.getAttribute("data-category");

            if (selectedCategory === "all" || selectedCategory === productCategory) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    function searchProducts() {
        const searchTerm = searchProduct.value.toLowerCase();

        products.forEach((product) => {
            const productName = product.textContent.toLowerCase();
            const productCategory = product.getAttribute("data-category");

            if ((productName.includes(searchTerm) || searchTerm === "") && (filterCategory.value === "all" || filterCategory.value === productCategory)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
});
