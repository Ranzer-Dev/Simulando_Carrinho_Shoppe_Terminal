async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subTotal: function(){
        return this.quantity * this.price
    },
  };
}

export default createItem;
