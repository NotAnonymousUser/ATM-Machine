#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 100000;
let myPin = 13579;
const accountLimit = 10000000;
console.log("Welcome to ATM Simulator");
console.log("Use code 13579 to get access");
let quesPin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.blue("Enter you pin"),
});
if (quesPin.pin === myPin) {
    console.log(chalk.green("Account access GRANTED !"));
    let atmOperations = await inquirer.prompt({
        name: "operation",
        type: "list",
        choices: [
            "fast cash",
            "withdraw",
            "deposit",
            "balance inquiry",
            "PIN change",
        ],
    });
    if (atmOperations.operation === "fast cash") {
        console.log(`fast cash selected`);
        let fastCash = await inquirer.prompt({
            name: "fast",
            type: "list",
            message: "Choose an amount to withdraw",
            choices: [1000, 5000, 10000, 20000, 50000],
        });
        if (fastCash.fast === 1000) {
            myBalance -= 1000;
        }
        else if (fastCash.fast === 5000) {
            myBalance -= 5000;
        }
        else if (fastCash.fast === 10000) {
            myBalance -= 10000;
        }
        else if (fastCash.fast === 20000) {
            myBalance -= 20000;
        }
        else if (fastCash.fast === 50000) {
            myBalance -= 50000;
        }
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
    else if (atmOperations.operation === "withdraw") {
        let withdrawCash = await inquirer.prompt({
            name: "cashout",
            type: "number",
            message: "Enter your amount",
        });
        if (withdrawCash.cashout > myBalance) {
            console.log(chalk.red("Sorry ! insufficient balance"));
        }
        else {
            myBalance -= withdrawCash.cashout;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
    else if (atmOperations.operation === "deposit") {
        let depositCash = await inquirer.prompt({
            name: "cashin",
            type: "number",
            message: "Enter your amount",
        });
        if (depositCash.cashin > accountLimit) {
            console.log(chalk.red(`Cant add ${depositCash.cashin} amount to your account because your account is exceeding the max limit i.e ${accountLimit}.\nkindly contact the bank manager to upgrade your limit.`));
        }
        else {
            myBalance += depositCash.cashin;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
    }
    else if (atmOperations.operation === "balance inquiry") {
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
    else if (atmOperations.operation === "PIN change") {
        let changePin = await inquirer.prompt({
            name: "change",
            type: "number",
            message: "Type your new password",
        });
        let myPin = changePin.change;
        console.log(`Your new pin is ${myPin}`);
    }
}
else {
    console.log(chalk.red("Sorry your pin was not correct"));
}
