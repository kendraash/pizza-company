function Pizza(quantity, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.calculatedCost = function () {
  var price;
  if(this.pizzaSize === "sm")
    price = 10;
  else if (this.pizzaSize === "md")
      price = 12;
  else
    price = 14;

  var toppingPrice = 0;
  for(var i = 1; i <= (this.toppings.length - 2); i++) {
    toppingPrice = toppingPrice + 1;
  }
  this.price = this.quantity * (price + toppingPrice);
}


$(document).ready(function(event) {

  $("#add-another-topping").click(function() {
    $("#toppings").append(
      '<div class="form-group add-toppings id="add-toppings-form">' +
      '<label class="form-label" for="topping">Toping:</label>' +
      '<input class="form-control input-topping" name="topping">' +
      '</div>'
    );
  });


  $("form#new-pizza-order").submit(function(event) {
    event.preventDefault();

    var inputQuantity = $("select#new-pizza-quantity option:selected").val();
    var inputSize = $("select#new-pizza-size option:selected").val();
    var newPizza = new Pizza(inputQuantity, inputSize);
    // add each topping to array
    $(".add-toppings").each(function() {
      var newTopping = $(this).find(".input-topping").val();
      newPizza.addTopping(newTopping);
    });
    // get price
    newPizza.calculatedCost();
    // add to ul list
     $('#pizza-confirmation').text('Price for:  ' + newPizza.quantity + " " + newPizza.pizzaSize + " pizzas with  " + newPizza.toppings.join(", ") + " will cost: $" + newPizza.price);

     $("#pizzas").append("<li>" + newPizza.quantity + ", " + newPizza.pizzaSize + " pizza: $" + newPizza.price +"</li>");
     // clear fields
     $("select#new-pizza-quantity").find("option:first").attr("selected", "selected");
     $("select#new-pizza-size").find("option:first").attr("selected", "selected");
     $(".input-topping").val("");
    //  $("#add-toppings-form").hide();
  });
});
