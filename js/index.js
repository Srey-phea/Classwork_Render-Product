import { UserComponent } from "../components/UserComponent.js";
import { ProductComponent } from "../components/ProductComponent.js";
import { CardComponent } from "../components/CardComponent.js";
import { getData } from "../store/fetchApi.js";
let renderUser = document.querySelector("#renderUser");
let renderProduct = document.querySelector("#renderProduct");
let renderArea = document.querySelector("#renderArea");
// const base_url = "http://127.0.0.1:5501/data/products.json"

// fetch(base_url)
// .then((x) => x.json())
// .then((data) => {
//   let products= data.products;
//   products.map((product) => (renderArea.innerHTML += CardComponent(product)));
// });

let users = await getData("users");
users.map((user) =>(renderUser.innerHTML += UserComponent(user)));
let products = await getData("products");
products.map((product) => (renderProduct.innerHTML += ProductComponent(product)))