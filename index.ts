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
    choices: [
      chalk.yellow("fast cash"),
      chalk.blue("withdraw"),
      chalk.green("check balance"),
    ],
  });

  if (atmOperations.operation === chalk.yellow("fast cash")) {
    console.log(`fast cash selected`);

    let fastCash = await inquirer.prompt({
      name: "fast",
      type: "list",
      message: "Choose an amount to withdraw",
      choices: [1000, 5000, 10000, 20000, 50000],
    });

    if (fastCash.fast === 1000) {
      myBalance -= 1000;
    } else if (fastCash.fast === 5000) {
      myBalance -= 5000;
    } else if (fastCash.fast === 10000) {
      myBalance -= 10000;
    } else if (fastCash.fast === 20000) {
      myBalance -= 20000;
    } else if (fastCash.fast === 50000) {
      myBalance -= 50000;
    }
    console.log(`Your Remaining Balance is ${myBalance}`);
  } else if (atmOperations.operation === chalk.blue("withdraw")) {
    let withdrawCash = await inquirer.prompt({
      name: "takeout",
      type: "number",
      message: "Enter your amount",
    });
    myBalance -= withdrawCash.takeout;
    console.log(`Your Remaining Balance is ${myBalance}`);
  } else if (atmOperations.operation === chalk.green("check balance")) {
    console.log(`Your Remaining Balance is ${myBalance}`);
  }
} else {
  console.log(chalk.red("Sorry your pin was not correct"));
}
