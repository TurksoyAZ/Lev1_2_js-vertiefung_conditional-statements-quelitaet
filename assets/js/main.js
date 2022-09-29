

const output = document.getElementById("output");
const inputText = document.getElementById("input1");

function sendInfo(){
    if(inputText.value == "") {output.innerHTML = "Geben Sie bitte eine Zahl von 0 bis 10",output.style.color="red" }
    else if ( inputText.value >=11) {output.innerHTML = "Geben Sie bitte eine Zahl von 0 bis 10" ,output.style.color="red" }

    else if( inputText.value >= 0 && inputText.value <=2) {output.innerHTML = "Schlecht", output.style.color="red"}
    else if(inputText.value >= 3 && inputText.value <=5) {output.innerHTML = "Okay", output.style.color="blue" }
    else if( inputText.value >= 6 && inputText.value<=7) {output.innerHTML = "Gut", output.style.color=" #a1a" }
    else if(inputText.value >= 8 && inputText.value <=10 ) {output.innerHTML = "Super", output.style.color="green"}
  

}