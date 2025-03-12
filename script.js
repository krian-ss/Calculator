
function clearScreen(){
    document.getElementById("inputBox").value = ""
}

function display(val){
    document.getElementById('inputBox').value += val
}

function del(){
    let input = document.getElementById('inputBox').value
    document.getElementById('inputBox').value = input.slice(0,-1)
}

function calculate(){
    var x = document.getElementById('inputBox').value 
    var y = eval(x)
    document.getElementById('inputBox').value = y
}