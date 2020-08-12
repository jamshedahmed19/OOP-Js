//Classes
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  UpdateScore() {
    this.score++;
    console.log(this.name, "score is", this.score);
    return this;
  }
  login() {
    console.log(this.email, "is logged in");
    return this;
  }
  logout() {
    console.log(this.email, "is logged in");
    return this;
  }
}

let userOne = new User("Jamshed", "jamsheda4ahmed786@gmail.com");
let userTwo = new User("Hammad", "hammadwasseem@gmail.com");

console.log(userOne, userTwo);
userTwo.login();
userOne.logout();
console.clear();
//Method chaining
//we can not chain methods of classes if it doen't return anything
//So in order to chain methods we have to return this keyword
console.log("Method Chaining");
userOne.login().UpdateScore().logout().UpdateScore();
userTwo.login().UpdateScore().logout().UpdateScore();
