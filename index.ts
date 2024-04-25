import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message : "Enter firstnumber" , types: "number", name : "firstnumber",},
    {message : "Enter secondnumber", types: "number", name : "secondnumber"},
     {
         message: "Select of the operators to perform operation",
         type : "list",
         name : "operators",
         choices : ["Addition", "Substraction","Multipulation","Division",],
     },
]);

if (answer.operators === "Addition"){
    console.log (answer.firstnumber +answer.secondnumber)
}  else if (answer.operators === "Substraction"){
    console.log (answer.firstnumber  -answer.secondnumber)
}  else if (answer.operators === "Multipulation"){
    console.log (answer.firstnumber  *answer.secondnumber)
}  else if (answer.operators === "Division"){
    console.log (answer.firstnumber  /answer.secondnumber)
} else{
console.log ("please select valid operators");
}