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
    }
    else if (atmOperations.operation === chalk.blue("withdraw")) {
        console.log(`withdraw selected`);
    }
    else if (atmOperations.operation === chalk.green("check balance")) {
        console.log(`Your Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Sorry your pin was not correct"));
}
