function searchProducts() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    
    const productCards = document.querySelectorAll(".product-card");
    
    productCards.forEach(card => {
        const productName = card.querySelector("h2").textContent.toLowerCase();
        
        if (productName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}