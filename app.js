
var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translator");
var outputDiv = document.querySelector("#txt-output");

var serverURL="https://api.funtranslations.com/translate/chef.json";

function constructedURL(input){
return (serverURL+"?"+"text="+input)
}

function errorHandler(error){
alert("Try After some time")
}

function clickHandler(){
  
    var inputText=txtInput.value; 

    fetch(constructedURL(inputText)) 
    .then(response=>response.json())
    .then(json=>{
        outputDiv.innerHTML=json.contents.translated
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);
