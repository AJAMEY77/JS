const accId= '123456789012'; //constant
let accPassword= 'password'; //use let for variable declaration 
var accEmail= "amey57@gmail.com"; //dont use var because of issue in block scope and functional scope
accCity="Pune";     //never do this not good practice to declare variable without let or const
let accState;


// accId= '987654321098';
// accPassword`='newpassword'; `
accEmail="amey345gmail.com";
accCity="Mumbai";


console.log(accCity)


console.table({accId, accPassword, accEmail, accCity, accState})