import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 100000;
let myPin = 123;

let quesPin = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: chalk.blue("enter you pin"),
});

if (quesPin.pin === myPin) {
  console.log(chalk.green("your pin was correct"));

  let atmOperations = await inquirer.prompt({
    name: "operation",
    type: "list",
    choices: ["fast cash", "withdraw", "check balance"],
  });

   if (atmOperations.operation === "fast cash") {
   }
   if (atmOperations.operation === "withdraw") {
   }
   if (atmOperations.operation === "check balance") {
   }


} else {
  console.log(chalk.red("Sorry your pin was not correct"));
}
