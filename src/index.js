import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Bem vindo ao seu carrinho de compras da Shoppe!");

const item1 = await createItem("Notebook", 5000, 2);
const item2 = await createItem("Mouse", 100, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.decreaseItemQuantity(myCart, item2)
await cartService.decreaseItemQuantity(myCart, item1)

await cartService.deleteItem(myCart, 2);

await cartService.displayCart(myCart)