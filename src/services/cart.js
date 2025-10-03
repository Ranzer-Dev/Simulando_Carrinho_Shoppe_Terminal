async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, index) {
    const deleteIndex = index - 1
    console.log(deleteIndex)
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1)
    }

}

async function decreaseItemQuantity(userCart, item) {
    const indexItem = userCart.findIndex(p => p.name === item.name);

    if (indexItem === -1) {
        console.log("Item não encontrado")
        return
    }

    if (userCart[indexItem].quantity > 1) {
        userCart[indexItem].quantity -= 1
        return
    }

    if (userCart[indexItem].quantity === 1) {
        userCart.splice(indexItem, 1)
    }
}

async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");

    const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
    console.log(`Total: ${result}`);
}

async function displayCart(userCart) {
    console.log("Items in cart:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | x:${item.quantity} | Subtotal ${item.subTotal()}`)
    });
    console.log("\nShopee Cart TOTAL IS:");

    const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
    console.log(`Total: ${result}`);
}

export { addItem, deleteItem, decreaseItemQuantity, calculateTotal, displayCart };