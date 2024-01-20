var op;
    function func(){
        var result;
        var a = Number(document.getElementById("a"). value);
        var b = Number(document.getElementById("b"). value);

        switch (op){
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
    document.getElementById("result").innerHTML = result;    

    }