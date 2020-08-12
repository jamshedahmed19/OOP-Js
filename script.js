//Object Literals
let user = {
  //Properties
  name: "Jamshed Ahmed",
  email: "jamsheda4ahmed786@gmail.com",
  age: 19,
  //Methods
  login() {
    console.log(this.email, "is logged in");
  },
  logout() {
    console.log(this.email, "is logged out");
  },
};
//accessing method
user.login();
//accessing property
console.log(user.name);
//Dynamic Accessing
console.log(user["email"]);
let property = "age";
console.log(user[property]);
property = "email";
console.log(user[property]);
console.log(user);
//Updating Properties
user.name = "Hammad";
console.log(user.name);
console.log(user);
//we can also add properties/methods that does'nt exist But, it's not recommended
user.dob = "21/02/2001";
console.log(user.dob)
console.log(user)
//methods
user.percentage = function(){}
console.log(user)