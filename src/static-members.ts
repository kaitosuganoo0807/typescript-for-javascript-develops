export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'kaito';
  static lastName: string = 'sugano';

  static work() {
    // "Hey, guys! This is かいと Are you interested in TypeScript?";
    return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());