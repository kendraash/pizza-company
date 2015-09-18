describe('Pizza', function() {
  it('creates a new pizza with the given specifications', function() {
    var testPizza = new Pizza(1, "sm");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.equal("sm");
    expect(testPizza.toppings).to.eql([]);
  });
  it('adds a topping to the array of toppings for a pizza', function() {
    var testPizza = new Pizza(2, "sm");
    testPizza.addTopping("cheese");
    expect(testPizza.toppings).to.eql(["cheese"]);
  })
  it('returns the cost of the pizza based on size, quantity, number of toppings', function() {
    var testPizza = new Pizza(2, "sm");
    testPizza.addTopping("Cheese");
    testPizza.addTopping("Bacon");
    testPizza.addTopping("Pineapple");
    testPizza.calculatedCost();
    expect(testPizza.price).to.equal(22);
  });
});
