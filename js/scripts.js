function Pizza(quantity, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

$(document).ready(function(event) {

  $("#add-another-topping").click(function() {
    $("#toppings").append(
      '<div class="form-group add-toppings">' +
      '<label class="form-label" for="topping">Toping:</label>' +
      '<input class="form-control input-topping" name="topping">' +
      '</div>'
    );
  });

  $("form#new-pizza-order").submit(function(event) {
    event.preventDefault();

    var inputQuantity = $("select#new-pizza-quantity option:selected");
    var inputSize = $("select#new-pizza-size option:selected");
    var newPizza = new Pizza(inputQuantity, inputSize);

    $(".add-toppings").each(function() {
      var newTopping = $(this).find(".input-topping").val();

      newPizza.addTopping(newTopping);
    });

  });
});
