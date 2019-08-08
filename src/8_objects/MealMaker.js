const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(value) {
        this._courses.appetizers = value;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(value) {
        this._courses.mains = value;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(value) {
        this._courses.desserts = value;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };

        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}... The price is $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'one', 1);
menu.addDishToCourse('mains', 'two', 2);
menu.addDishToCourse('desserts', 'three', 3);

menu.addDishToCourse('appetizers', 'four', 4);
menu.addDishToCourse('mains', 'five', 5);
menu.addDishToCourse('desserts', 'six', 6);

menu.addDishToCourse('appetizers', 'seven', 7);
menu.addDishToCourse('mains', 'eight', 8);
menu.addDishToCourse('desserts', 'nine', 9);

console.log(menu.generateRandomMeal());
