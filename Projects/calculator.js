const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Enter First NUmber :",(num1)=>{
    rl.question("Enter Second Number :",(num2)=>{
        rl.question("Enter Operator (+,-,*,/) :",(op)=>{
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            let result;
            switch(op){
                case "+":result=num1+num2;
                        break;
                case "-":result=num1-num2;
                        break;
                case "*":result=num1*num2;
                        break;
                case "/":result=num1/num2;
                        break;
                default :result="Invalid Operator";

            }
            console.log("result :",result);
            rl.close();
        })
    })
})