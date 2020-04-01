const menu = {

  _courses : {
    appetizers : [],
    mains : [],
    desserts: [],
  } ,

  get appetizers() {
    return this._courses.appetizers;
  } ,
  get mains () {
    return this._courses.mains;
  } ,
  get desserts () {
    return this._courses.desserts;
  } ,
  set appetizers (appetizers) {
    this._courses.appetizers = appetizers
  } ,

  set mains (mains) {
    this._courses.mains = mains
  },

  set desserts (desserts) {
    this._courses.desserts = desserts
  } ,

  get _courses () {
    return {
      appetizers : this.appetizers ,
      mains : this.mains ,
      desserts : this.desserts
    }
  },

  addDishToCourse (courseName , dishName , dishPrice ) {
      const dish = {

          name : dishName ,
          price : dishPrice
      };

      return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName){

    const dishes = this._courses[courseName];

    const randomIndex = Math.floor(Math.random()*dishes.length);

    return dishes[randomIndex];
  },

  generateRandomMeal() {

    const appetizer = this.getRandomDishFromCourse(appetizers);

    const main =  this.getRandomDishFromCourse(mains);

    const dessert = this.getRandomDishFromCourse(desserts);

    const totalPrice = appetizer.price + main.price + dessert.price

    return `your meal is ${appetizer.name} , ${main.name} and ${dessert.name} total price is ${totalPrice}`
 }


}

menu.addDishToCourse('appetizers', 'adana', 28 );
menu.addDishToCourse('appetizers', 'lahmacun', 35 );
menu.addDishToCourse('appetizers', 'içli köfte', 20 );


menu.addDishToCourse('mains', 'soğan kebabı', 50 );
menu.addDishToCourse('mains', 'bezelye', 30 );
menu.addDishToCourse('mains', 'şiveydiz', 27 );

menu.addDishToCourse('desserts', 'antep peynirli irmik helvası', 28 );
menu.addDishToCourse('desserts', 'künefe', 35 );
menu.addDishToCourse('desserts', 'şöbiyet', 28 );

const meal = menu.generateRandomMeal() ;
console.log(meal);
