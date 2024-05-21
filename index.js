#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let resultWin = 0;
let resultLose = 0;
console.log(chalk.yellowBright.bold(`                                          Welcome to Quiz`));
console.log(chalk.blueBright(`---------------------------------------------------------------------------------------------------------------------`));
let Q1 = await inquirer.prompt([
    {
        name: "Ans",
        type: "list",
        message: chalk.cyanBright("Q1. What is TypeScript?"),
        choices: [
            chalk.yellowBright.bold("* Front-end framework"),
            chalk.yellowBright.bold("* CSS preprocessor"),
            chalk.yellowBright.bold("* Superset of JavaScript"),
            chalk.yellowBright.bold("* Database management system")
        ]
    }
]);
let Ans1 = Q1.Ans;
switch (Ans1) {
    case chalk.yellowBright.bold("* Superset of JavaScript"):
        console.log(chalk.green.bold("Correct Answer"));
        resultWin++;
        break;
    default:
        console.log(chalk.red.bold("Wrong Answer"));
        resultLose--;
}
let Q2 = await inquirer.prompt([
    {
        name: "Ans",
        type: "list",
        message: chalk.cyanBright("Q2. Which command is used to compile TypeScript to JavaScript?"),
        choices: [
            chalk.yellowBright.bold("* tsc --init"),
            chalk.yellowBright.bold("* tsc"),
            chalk.yellowBright.bold("* node.js"),
            chalk.yellowBright.bold("* npm init")
        ]
    }
]);
let Ans2 = Q2.Ans;
switch (Ans2) {
    case chalk.yellowBright.bold("* tsc"):
        console.log(chalk.green.bold("Correct Answer"));
        resultWin++;
        break;
    default:
        resultLose--;
        console.log(chalk.red.bold("Wrong Answer"));
}
let Q3 = await inquirer.prompt([
    {
        name: "Ans",
        type: "list",
        message: chalk.cyanBright("Q3. Which array method is used to push elements to the start of an array?"),
        choices: [
            chalk.yellowBright.bold("* .push()"),
            chalk.yellowBright.bold("* .shift()"),
            chalk.yellowBright.bold("* .length"),
            chalk.yellowBright.bold("* .unshift()")
        ]
    }
]);
let Ans3 = Q3.Ans;
switch (Ans3) {
    case chalk.yellowBright.bold("* .unshift()"):
        console.log(chalk.green.bold("Correct Answer"));
        resultWin++;
        break;
    default:
        resultLose--;
        console.log(chalk.red.bold("Wrong Answer"));
}
let Q4 = await inquirer.prompt([
    {
        name: "Ans",
        type: "list",
        message: chalk.cyanBright("Q4. What are global variables?"),
        choices: [
            chalk.yellowBright.bold("* Variables declared and used in an object"),
            chalk.yellowBright.bold("* Variables declared with let"),
            chalk.yellowBright.bold("* Variables declared with const"),
            chalk.yellowBright.bold("* Variables declared at the start of the program and can be used throughout the program")
        ]
    }
]);
let Ans4 = Q4.Ans;
switch (Ans4) {
    case chalk.yellowBright.bold("* Variables declared at the start of the program and can be used throughout the program"):
        console.log(chalk.green.bold("Correct Answer"));
        resultWin++;
        break;
    default:
        resultLose--;
        console.log(chalk.red.bold("Wrong Answer"));
}
let Q5 = await inquirer.prompt([
    {
        name: "Ans",
        type: "list",
        message: chalk.cyanBright("Q5. What is used to make a special character a normal character in TypeScript?"),
        choices: [
            chalk.yellowBright.bold("* ---> \\ "),
            chalk.yellowBright.bold("* ---> ;"),
            chalk.yellowBright.bold("* ---> -"),
            chalk.yellowBright.bold("* ---> $")
        ]
    }
]);
let Ans5 = Q5.Ans;
switch (Ans5) {
    case chalk.yellowBright.bold("* ---> \\ "):
        console.log(chalk.green.bold("Correct Answer"));
        resultWin++;
        break;
    default:
        resultLose--;
        console.log(chalk.red.bold("Wrong Answer"));
}
console.log(chalk.yellowBright.bold(`No. of correct Answers = ${resultWin}`));
console.log(chalk.yellowBright.bold(`No. of wrong Answers = ${resultLose * -1}`));
if (resultWin > resultLose * -1) {
    console.log(chalk.green.bold("Congratulations! You Won"));
}
else {
    console.log(chalk.red.bold("Oops! You lost"));
}
