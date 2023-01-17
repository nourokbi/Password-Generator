const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""

let firstResult = document.getElementById("firstResult")
let secondResult = document.getElementById("secondResult")

function generatePassword(lenght) {
    let password = ""
    for (let count = 0; count < lenght; count++) {
        random = Math.floor(Math.random() * characters.length);
        password += characters[random]
    }
    return password
}

let btn = document.getElementById("generate-btn")

btn.addEventListener("click" , function() {
    let form = document.getElementById("my-form")
    var len = form.elements[0].value
    password1 = generatePassword(len);
    password2 = generatePassword(len);

    firstResult.textContent = password1
    secondResult.textContent = password2
});
