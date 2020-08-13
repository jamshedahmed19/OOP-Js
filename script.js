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

// Prototype Inheritance
// ...args will convert the parameter into an array
function Admin(...args) {
  // applying user function to new admin object
  // this refer to admin object
  User.apply(this, args);
  // new property only admin have access to
  this.role = "Admin";
  // Now admin has access to properties of user class but not
  // methods
}
// since prototype is just an object we are creating admin
// prototype from user prototype
Admin.prototype = Object.create(User.prototype);
// new method only admin have access to
Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

let admin = new Admin("Jamshed Ahmed", "jamsheda4ahmed786@gmail.com");
let userOne = new User("Uzair Ahmed", "uzairahmed786@gmail.com");
let userTwo = new User("Hammad Waseem", "hammadwaseem@gmail.com");
let users = [userOne, userTwo, admin];

// userOne.login();
// previously when we console log an object methods were shown under
// the __proto__ property but now they're showing outside of it
// because we have defined methods directly inside user constructor function
console.log(userOne);
userOne.login();
console.log(userOne);
userOne.logout();
console.log(userOne);
console.clear();
console.log(admin);
admin.deleteUser(userOne);
console.log(users);
