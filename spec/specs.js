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
});
