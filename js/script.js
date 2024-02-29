'use strict'
import { cardProduct } from "../components/cardProduct.js";
import { cardUser } from "../components/cardUser.js";
const renderArea = document.querySelector("#render-area")
const BASE_URL = "http://127.0.0.1:5500/data/products.json"
fetch(BASE_URL).then((res) => res.json()).then((data) => {
    data.map((product)=>{
            renderArea.innerHTML += cardProduct(product);
    });
})
.catch((error) => console.error("Error fetching products:", error));

const renderAreaUser = document.querySelector("#render-areaUser")
const URL = "http://127.0.0.1:5500/data/users.json"
fetch(URL).then((res) => res.json()).then((data) => {
    data.map((user)=>{
            renderAreaUser.innerHTML += cardUser(user);
    });
})
.catch((error) => console.error("Error fetching users:", error));
