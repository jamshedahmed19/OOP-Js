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
console.log(user.name)
