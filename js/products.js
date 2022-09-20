let products = {
    data: [
        {
            productName: "MINI SKILLA DRESS",
            category: "female",
            price: "1,332,000",
            image: "../images/product01.jpg",
        },
        {
            productName: "MINI SKILLA DRESS",
            category: "female",
            price: "1,332,000",
            image: "../images/product02.jpg",
        },
        {
            productName: "MINI SKILLA DRESS",
            category: "male",
            price: "1,332,000",
            image: "../images/product03.jpg",
        },
        {
            productName: "MINI SKILLA DRESS",
            category: "male",
            price: "1,332,000",
            image: "../images/product04.jpg",
        },
        {
            productName: "MINI SKILLA DRESS",
            category: "female",
            price: "1,332,000",
            image: "../images/product05.jpg",
        },
        {
            productName: "MINI SKILLA DRESS",
            category: "female",
            price: "1,332,000",
            image: "../images/product06.jpg",
        },
        {
            productName: "MINI SKILLA DRESS",
            category: "male",
            price: "1,332,000",
            image: "../images/product07.jpg",
        },
        {
            productName: "MINI SKILLA DRESS",
            category: "male",
            price: "1,332,000",
            image: "../images/product08.jpg",
        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("infoContainer");

    let productName = document.createElement("h5");
    productName.classList.add("product-name");
    productName.innerText = i.productName.toUpperCase();
    infoContainer.appendChild(productName);

    let price = document.createElement("h6");
    price.innerText = "￦" + i.price;
    imgContainer.appendChild(price);

    card.appendChild(infoContainer);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".cate-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };