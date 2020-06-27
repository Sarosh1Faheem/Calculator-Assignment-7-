function getNumber(num){
    var result = document.getElementById("rslt");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("rslt");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("rslt");
    result.value = eval(result.value)
}