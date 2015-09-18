function Pizza(quantity, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

$(document).ready(function(event) {
  event.preventDefault();

  $("form#new-pizza-order").submit(function(event) {
    var inputQuantity = $("select#new-pizza-quantity option:selected");
    var inputSize = $("select#new-pizza-size option:selected");

  })
})
