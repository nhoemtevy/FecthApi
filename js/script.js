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