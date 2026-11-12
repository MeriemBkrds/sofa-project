let products = [
    {
        name: "Modern Lamp",
        price: "$35",
        category: "lamp",
        description: "Beautiful modern desk lamp.",
        image: "image.jpg"
    },
    {
        name: "Wooden Chair",
        price: "$60",
        category: "chair",
        description: "Comfortable wooden chair.",
        image: "image.jpg"
    },
    {
        name: "Luxury Sofa",
        price: "$350",
        category: "sofa",
        description: "Soft and stylish living room sofa.",
        image: "image.jpg"
    },
    {
        name: "Office Stool",
        price: "$45",
        category: "stool",
        description: "Adjustable office stool.",
        image: "image.jpg"
    },
    {
        name: "King Mattress",
        price: "$280",
        category: "matress",
        description: "Comfortable king-size mattress.",
        image: "image.jpg"
    },
    {
        name: "Bookshelf",
        price: "$150",
        category: "fourniture",
        description: "Large wooden bookshelf.",
        image: "image.jpg"
    },
    {
        name: "Bedside Lamp",
        price: "$40",
        category: "lamp",
        description: "Elegant bedside lamp.",
        image: "image.jpg"
    },
    {
        name: "Dining Chair",
        price: "$75",
        category: "chair",
        description: "Perfect chair for your dining room.",
        image: "image.jpg"
    }
];

let section = document.querySelector(".product-section");
let searchInput = document.querySelector("#searchInput");

function clearSection(){
    while (section.firstChild){
        section.firstChild.remove();
    }
}

function createcard(list){
    clearSection();

    if (list.length === 0){
        let info = document.createElement("div");
        info.classList.add("info");
        info.textContent = "no data found";
        section.append(info);
        info.append(textContent);
        return;
    }

    list.forEach(product => {

        let card = document.createElement("div");
        card.classList.add("product-card");

        let imageDiv = document.createElement("div");
        imageDiv.classList.add("product-image");

        let img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        imageDiv.append(img);

        let firstChild = document.createElement("div");
        firstChild.classList.add("first-child");

        let productDescription = document.createElement("div");
        productDescription.classList.add("product-description");

        let title = document.createElement("h4");
        title.textContent = product.name;

        let price = document.createElement("h5");
        price.textContent = product.price;

        productDescription.append(title, price);

        let description = document.createElement("div");
        description.classList.add("description");

        let desc = document.createElement("p");
        desc.textContent = product.description;

        description.append(desc);

        let btn = document.createElement("div");
        btn.classList.add("btn");

        let buyBtn = document.createElement("div");
        buyBtn.classList.add("buy-btn");

        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-cart-shopping");

        buyBtn.append(icon);
        btn.append(buyBtn);

        firstChild.append(productDescription, description, btn);

        card.append(imageDiv, firstChild);

        section.append(card);
    });
}
createcard(products);


function searchbycategory(event){
    const searchvalue = event.target.textContent.trim().toLowerCase();

    if (searchvalue == "all"){
        createcard(products);
        return;
    }

    const filter_list = products.filter((n) => {
        return n.category.toLowerCase() == searchvalue;
    });
    createcard(filter_list);
}


const searchBar = document.querySelector(".searchbar");


const input = document.createElement("input");
input.type = "text";
input.placeholder = "Search...";
input.classList.add("search-input");


const button = document.createElement("button");
button.textContent = "Search";
button.classList.add("search-btn");


searchBar.appendChild(input);
searchBar.appendChild(button);

button.addEventListener("click", searchProduct);

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});

function searchProduct() {
    const searchValue = input.value.trim().toLowerCase();

    if (searchValue === "") {
        createcard(products);
        return;
    }

    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue) ||
            product.description.toLowerCase().includes(searchValue)
        );
    });

    createcard(filteredProducts);
}

input.addEventListener("input", searchProduct);

