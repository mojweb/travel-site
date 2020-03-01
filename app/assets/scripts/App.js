import '../styles/styles.css'
import Person from "./modules/Person"

if (module.hot) {
  module.hot.accept()
}


/*  Lesson example code below   */
class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes zero taxes.");

  }
}


let john = new Person("John Doe", "pink");
john.greet();

let jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();












