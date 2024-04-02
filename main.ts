import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234; //Pin number

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your Pin Number:",
            type: "number"
        } 
    ]  
);

if(pinAnswer.pin === myPin){
    console.log(`Correct Pin Number`);
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select Option",
                type: "list",
                choices: ["withdraw", "Check Balance", "Fast cash"]
            }
        ]
    );
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            {
                name: "amount",
                message: "Enter your Amount:",
                type: "number"
            }
        );
        if(amountAns.amount <= myBalance){
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);    
            
        }else if(amountAns.amount > myBalance){
            console.log(`Insufficient Amount:${amountAns.amount}, because your current balance is ${myBalance}`);
            
        }

   
    }else if(operationAns.operation === "Check Balance"){
        console.log(`Your balance is: ${myBalance}`);

    }else if(operationAns.operation === "Fast cash"){
        let fastCashOption = await inquirer.prompt(
            [
                {
                    name: "cash",
                    message: "select any one",
                    type: "list",
                    choices: [1000, 2000, 3000, 4000, 5000]
                }
            ]
        );
        if(fastCashOption.cash === 1000){
            myBalance -= 1000;
            console.log(`You withdraw 1000, now your current balance is: ${myBalance}`);
            
        }else  if(fastCashOption.cash === 2000){
            myBalance -= 2000;
            console.log(`You withdraw 2000, now your current balance is: ${myBalance}`);
            
        }else if(fastCashOption.cash === 3000){
            myBalance -= 3000;
            console.log(`You withdraw 3000, now your current balance is: ${myBalance}`);
            
        }else if(fastCashOption.cash === 4000){
            myBalance -= 4000;
            console.log(`You withdraw 4000, now your current balance is: ${myBalance}`);
            
        }else if(fastCashOption.cash === 5000){
            myBalance -= 5000;
            console.log(`You withdraw 5000, now your current balance is: ${myBalance}`);
            
        }
    }
}else{
    console.log("Incorrect Pin Number");
}

