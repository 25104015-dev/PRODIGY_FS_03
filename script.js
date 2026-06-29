// =========================
// PRODUCT DATA
// =========================

const products = [
    {
        id: 1,
        name: "Fresh Apple",
        category: "Fruit",
        price: 120,
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400"
    },
    {
        id: 2,
        name: "Banana",
        category: "Fruit",
        price: 60,
        image: "https://images.unsplash.com/photo-1574226516831-e1dff420e37f?w=400"
    },
    {
        id: 3,
        name: "Tomato",
        category: "Vegetable",
        price: 40,
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400"
    },
    {
        id: 4,
        name: "Carrot",
        category: "Vegetable",
        price: 50,
        image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400"
    },
    {
        id: 5,
        name: "Milk",
        category: "Dairy",
        price: 55,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400"
    }
];

// =========================
// LOAD PRODUCTS
// =========================

function loadProducts(list = products){

    const container = document.getElementById("product-grid");

    if(!container) return;

    container.innerHTML = "";

    list.forEach(product=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <div class="price">₹${product.price}</div>

                <button onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}

// =========================
// SEARCH
// =========================

function searchProduct(){

    const input=document.getElementById("search");

    if(!input) return;

    const keyword=input.value.toLowerCase();

    const filtered=products.filter(product=>

        product.name.toLowerCase().includes(keyword)

    );

    loadProducts(filtered);

}

// =========================
// FILTER
// =========================

function filterProducts(category){

    if(category==="all"){

        loadProducts();

    }

    else{

        const filtered=products.filter(product=>

            product.category===category

        );

        loadProducts(filtered);

    }

}

// =========================
// CART
// =========================

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(id){

    const product=products.find(item=>item.id===id);

    cart.push(product);

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    alert(product.name+" added to cart!");

}

function updateCartCount(){

    const count=document.getElementById("cartCount");

    if(count){

        count.innerText=cart.length;

    }

}

function loadCart(){

    const cartItems=document.getElementById("cartItems");

    const total=document.getElementById("totalPrice");

    if(!cartItems) return;

    cartItems.innerHTML="";

    let sum=0;

    cart.forEach((item,index)=>{

        sum+=item.price;

        cartItems.innerHTML+=`

        <div class="cart-item">

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

            <button onclick="removeCart(${index})">

            Remove

            </button>

        </div>

        `;

    });

    if(total){

        total.innerHTML="₹"+sum;

    }

}

function removeCart(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

    updateCartCount();

}

// =========================
// LOGIN
// =========================

function login(){

    const email=document.getElementById("loginEmail").value;

    const password=document.getElementById("loginPassword").value;

    if(email===""||password===""){

        alert("Enter Email and Password");

        return;

    }

    alert("Login Successful");

    window.location.href="index.html";

}

// =========================
// REGISTER
// =========================

function register(){

    const name=document.getElementById("registerName").value;

    const email=document.getElementById("registerEmail").value;

    const password=document.getElementById("registerPassword").value;

    if(name===""||email===""||password===""){

        alert("Fill all fields");

        return;

    }

    alert("Registration Successful");

    window.location.href="login.html";

}

// =========================
// CHECKOUT
// =========================

function placeOrder(){

    const name=document.getElementById("customerName").value;

    const address=document.getElementById("customerAddress").value;

    const phone=document.getElementById("customerPhone").value;

    if(name===""||address===""||phone===""){

        alert("Please fill all details");

        return;

    }

    alert("Order Placed Successfully");

    localStorage.removeItem("cart");

    window.location.href="order-success.html";

}

// =========================
// HOME BUTTON
// =========================

function scrollProducts(){

    window.location.href="products.html";

}

// =========================
// PAGE LOAD
// =========================

window.onload=function(){

    loadProducts();

    loadCart();

    updateCartCount();

};