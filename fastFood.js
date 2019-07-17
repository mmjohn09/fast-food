const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
       this.orders.push(meal)
    },
    getOrder: function (meal) {
        return this.meal
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "small"
}

const hamburgerMeal = {
    sandwichType: "hamburger",
    fries: true,
    drinkSize: "medium"
}



// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(hamburgerMeal)


console.table(restaurant.orders)


// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()