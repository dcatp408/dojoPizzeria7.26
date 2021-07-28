
function pizzaOven(userCrustType, userSauceType, userCheeses, userToppings) {
    var pizza = {
        crustType: userCrustType,
        sauceType: userSauceType,
        cheeses: userCheeses,
        toppings: userToppings
    };
    return pizza;
}


var s1 = (pizzaOven('deep dish', 'traditional', ["mozzarella"], ["pepperoni", "sausage"]))
console.log(s1);
var s2 = (pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))
console.log(s2);
var s3 = (pizzaOven("thin crust", "no sauce", ["parmesan", "feta"], ["salami", "sausage ", "green onions"]))
console.log(s3);
var s4 = (pizzaOven("cheese stuffed", "marinara", ["mozzarella"], ["pineapple", "ham", "onions"]))
console.log(s4);
