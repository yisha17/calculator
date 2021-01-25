
function calc(){
    
    operation = prompt("what operation you want? \n  1) add \n 2) multiplication \n 3)division \n 4) minus");
    var result = 0;

    switch(operation){
        case "1":
            add();
            break;
        case "2":
            multiplication();
            break;
            
        case "3":
            div();
            break;
            
            
        case "4":
            minus();
            break;
    }


    function add(){
        var size = parseInt(prompt("how many numbers you want to add?"));
        num = [];
        for(var i = 0; i < size; i++){
            num[i] = parseInt(prompt("enter value" + (i + 1)));
            result += num[i];
        }
        console.log(result);
    }

    function multiplication(){
        var size = parseInt(prompt("how many numbers you want to multiply?"));
        var num = [];
        let result = 1;
        for(var i = 0; i < size; i++){
            num[i] = parseInt(prompt("enter value" + (i + 1)));
            result *= num[i];
        }
        console.log(result);
    }

    function div(){
        num1 = prompt("enter numnator");
        num2 = prompt("enter denominator");

        if(num2 == 0){
            alert("can not divide by zero")
        }else{
            result = num1/num2;
            console.log(result);
        }
    }


    function minus(){
        num1 = prompt("enter num1");
        num2 = prompt("enter num2");

        result = num1-num2;
        console.log(result);
    }
}
calc();
 