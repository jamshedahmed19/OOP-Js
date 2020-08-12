//Classes
class Users {
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

let userOne = new Users("Uzair", "uzairahmed786@gmail.com");
let userTwo = new Users("Hammad", "hammadwasseem@gmail.com");

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

// Class Inheritance

// for example we have a website that have user which use
// Users Class but we also have admins which have access to more
// methods like delete users but also have same properties and methods
// as normal users.

// One way is to creating Admin class from scratch we can extend
// user class

console.clear();
class Admin extends Users {
  // we don't need contructor method because it already have
  // access to Users class contructor method
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

let admin = new Admin("Jamshed", "jamsheda4ahmed786@gmail.com");
let users = [userOne, userTwo, admin];
// admin deleting a user
admin.deleteUser(userOne);
console.log(users);
// but normal users can't use deleteUser method
userTwo.deleteUser(userOne);
console.log(users);