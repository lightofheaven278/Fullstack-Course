class Person {
  constructor() {
    this.value1 = null;
    this.value2 = null;
  }
  Read(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }
  Sum() {
    let result = this.value1 + this.value2;
    return result;
  }
  Mul() {
    let result = this.value1 * this.value2;
    return result;
  }
}

const person = new Person();
person.Read(6, 7);
console.log(person.Sum());
console.log(person.Mul());
