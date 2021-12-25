
//function to add display values of button pressed on the calculator
const displayButtonValue = (value) =>{
    //if the  clear button was clicked
    if(value==='') {
        document.getElementById("display").value=''
        return document.getElementById('calc').innerHTML='0'
    }

    //if the delete button was clicked
    if(value==='delete') {
        if(document.getElementById('display').value.length===0) return //if there is no value yet in the calculator

        //if the length of values in the calculator is 1
        if(document.getElementById('display').value.length===1) return document.getElementById('display').value=''

        //if the length of the values in the calculator is greater than 1
        //use a substring method to remove the last element and update the values in the calculator
        return document.getElementById('display').value=
            document.getElementById('display').value
                .substring(0,document.getElementById('display').value.length-1
                )
    }

    //if either numeric value or arithmetic operator button was pressed
  return   value==='/'|| value==='-' || value==='*' || value==='+' // a condition to check  for arithmetic operator to avoid error
        ? document.getElementById("display").value=arithCheck(document.getElementById("display").value, value) //arithmetic  operator checker
        : document.getElementById("display").value+=value //if value is not an arithmetic operator, append value


}

//function to calculate the values in the calculator
const calculate = () =>{
    //using try and catch for proper error handling during calculation
    try{
        //evaluate values and update the calculator with the result
        document.getElementById('calc').innerHTML=
            document.getElementById("display").value+'='+eval(document.getElementById("display").value)
        return document.getElementById("display").value=''
    }catch (e) {
        //if error exist, alert a message
        window.alert("Invalid Mathematics Operation")
    }


}

//function to check arithmetic operators to avoid cases like having two operators after each other
const arithCheck =(element,sign)=>{
    let lastXter = element[element.length-1] //get the last character of the calculator
    //if the last character is any operator, replace it with the new operator
    if(lastXter==='/'|| lastXter==='-' || lastXter==='*' || lastXter==='+')return `${element.substring(0,element.length-1)}${sign}`

    //else return element value with the new operator
    return `${element}${sign}`
}