//Classes
// Js does'nt have Classes itself they were added later
// before that we have to create objects using proptypes
// since when we create classes using class keyword we
// use constructor function which we still have to use in prototypes model

function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
  // this.login = function () {
  //   console.log(this.email, "is logged in");
  // };
}
// Now instead of directly defining methods inside construtor function
// we are using proptype property
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "is logged in");
};
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "is logged out");
};

let userOne = new User("Jamshed Ahmed", "jamsheda4ahmed786@gmail.com");
let userTwo = new User("Hammad Waseem", "hammadwaseem@gmail.com");

// userOne.login();
// previously when we console log an object methods were shown under
// the __proto__ property but now they're showing outside of it
// because we have defined methods directly inside user constructor function
console.log(userOne);
userOne.login();
console.log(userOne);
userOne.logout();
console.log(userOne);
