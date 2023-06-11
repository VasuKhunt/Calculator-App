let inval = document.getElementById("inputBox");
let string = ""

function display(val) {
    // document.getElementById("inputBox").value += val;
    inval.value += val;
    string += val;
    // return val;
}

function del() {
    // let inval = document.getElementById("inputBox");
    string = string.substring(0 , string.length-1);
    inval.value = string;
}

function solve() {
    inval.value = eval(string);

}

function clearval() {
    string = " ";
    inval.value = " ";
}