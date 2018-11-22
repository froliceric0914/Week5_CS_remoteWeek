//super class
class Person {
  constructor(name, quirkyFact, foo) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    // this.cb = cb();
  }
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${
      this.quirkyFact
    }.`;
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio() {
    return `${super.bio()} And my cohort starts at ${this.cohort}.`;
  }
}
class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}. And my duty today is ${
      this.onShift
    }`;
  }
}

let Eric = new Student("Eric", "Left");
Eric.enroll("Oct"); //invoke the function in the child class
console.log(Eric.bio());

const bob = new Mentor("Bob Ross", "I like mountains way too much");
bob.goOnShift();
console.log(bob.bio());
