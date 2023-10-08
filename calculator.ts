import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import { log } from "console";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    }
    )
}

async function welcome() {
    let greet = chalkAnimation.rainbow("CALCULATION");
    await sleep();
    greet.stop();
}


var final: number = 0;
let answer: any;
let answer2: any;
let operat: any;
async function question() {
    answer = await inquirer.prompt([{
        type: "input",
        name: "num1",
        message: chalk.inverse("Enter number"),
        validate: (ans) => {
            if (isNaN(ans)) {
                return "Please enter number";
            }
            return true;
        }
    },

    {
        type: "list",
        name: "operator",
        message: chalk.italic.bgBlueBright("Enter operation you want to perform"),
        choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power"]
    },
    {
        type: "input",
        name: "num2",
        message: chalk.inverse("Enter number"),
        validate: (ans) => {
            if (isNaN(ans)) {
                return "Please enter number";
            }
            return true;
        }

    }
    ])
    if (answer.operator == "+ Addition") {
        final = +answer.num1 + +answer.num2;

    }

    else if (answer.operator == "- Subtraction") {
        final = +answer.num1 - +answer.num2;

    }
    else if (answer.operator == "* Multiplication") {
        final = +answer.num1 * +answer.num2;

    }
    else if (answer.operator == "/ Division") {
        final = +answer.num1 / +answer.num2;

    }
    else if (answer.operator == "^ Power") {
        final = (+answer.num1) ** +answer.num2;

    }
    
}

async function startagain() {
    await question();
    do {
        operat = await inquirer.prompt({
            type: "list",
            name: "operator",
            message: chalk.italic.bgBlueBright("Select =Equal for answer and other operations to continue calculation"),
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power",
                "= Equal"]
        })
        if (operat.operator == "= Equal") {
            
            console.log(`
 _____________________
|  _________________  |
| | ANSWER          | |
| |         ${final}     
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`);
console.log(chalk.italic.underline.bgGreen(`Your Answer is  ${final}`));
            return;
        }
        answer2 = await inquirer.prompt({
            type: "input",
            name: "num3",
            message:chalk.inverse("Enter number"),
            validate: (ans) => {
                if (isNaN(ans)) {
                    return "Please enter number";
                }
                return true;
            }
        })

        if (operat.operator == "+ Addition") {
            final += +answer2.num3;
            
        }

        else if (operat.operator == "- Subtraction") {
            final -= +answer2.num3;
            
        }
        else if (operat.operator == "* Multiplication") {
            final *= +answer2.num3;
            
        }
        else if (operat.operator == "/ Division") {
            final /= +answer2.num3;
           
        }
        else if (operat.operator == "^ Power") {
            final **= +answer2.num3;
            
        }
    } while (operat.operator != "= Equal")
}
await welcome();
await startagain();








