const UsersData = [
    {
      email: "batukabaterdene623@gmail.com",
      password: "Batuka0109!",
    },
    {
      email: "nest@gmail.com",
      password: "Nest12345678",
    },
  ];
  
  function Signup() {
    let passOne = document.getElementById("passOne").value;
    let passTwo = document.getElementById("passTwo").value;
    if (passOne.length >= 4 ) {
      if (passOne === passTwo) {
        if (passOne != passOne.toLowerCase()) {
          console.log("pass ok");
          Adduser(passOne);
        } else {
          alert("should have one upper case");
        }
      } else {
        alert("password doesnt match");
      }
    } else {
      alert("too short pass");
    }
  }
  
  function Adduser(password) {
    let email = document.getElementById("email").value;
  
    let newUser = {
      email: email,
      password: password,
    };
    UsersData.push(newUser);
  }
  
  function Login() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;
  
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email && UsersData[i].password == pass) {
        console.log("user found and ready to go next page");
        window.location.replace("./nuur.html");
      }
    }
  }