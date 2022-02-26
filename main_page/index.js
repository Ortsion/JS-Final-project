let inputPasscode = document.querySelector(".passcode");
const num1 = document.querySelector('#nu1');
const num2 = document.querySelector('#nu2');
const num3 = document.querySelector('#nu3');
const num4 = document.querySelector('#nu4');
const num5 = document.querySelector('#nu5');
const num6 = document.querySelector('#nu6');
const num7 = document.querySelector('#nu7');
const num8 = document.querySelector('#nu8');
const num9 = document.querySelector('#nu9');
const num0 = document.querySelector('#nu0');
let allNumbers = document.getElementsByClassName("number");
const deleteBtn = document.querySelector('#delete');
const wrong_passcode = document.querySelector('#wrong_passcode');

if (localStorage.passcode == '1234') {
    $('.box').hide();
} else {
    $('.main_menu').hide()
}





document.body.addEventListener('keydown',function keydown(event){
    console.log(event.key);
    if (event.key == 'Enter'){login()}
    if ( (event.key).match(/[0-9]/gi) ) {
        if(inputPasscode.innerHTML == 'Passcode'){inputPasscode.innerHTML = ''};
        if (inputPasscode.innerHTML.length < 4)  {
           
        inputPasscode.innerHTML += event.key;
        $(".passcode").css("color", "black");
        $("#delete").removeClass("pointer_none")};
        
} else if (event.key == 'Backspace' && inputPasscode.innerHTML != 'Passcode'){
    deletePasscode(event);
}
} )
   
    
    function stpoOn4() {
    if (inputPasscode.innerHTML.length >= 4) {
        [...allNumbers].forEach((e) => {
            e.classList.add("pointer_none")
        });
    }
}



// function keyPressed (event) {

// }


function btnClicked(event) {
    if (inputPasscode.innerHTML == 'Passcode') { inputPasscode.innerHTML = ''; }
    inputPasscode.innerHTML += event.target.innerHTML;
    $(".passcode").css("color", "black");
    $("#delete").removeClass("pointer_none");
    stpoOn4()
}

function deletePasscode(e) {
    if(inputPasscode.innerHTML == 'Passcode'){return}
    inputPasscode.innerHTML = inputPasscode.innerHTML.substring(0, inputPasscode.innerHTML.length - 1);
    if (inputPasscode.innerHTML.length < 4) {
        [...allNumbers].forEach((e) => {
            e.classList.remove("pointer_none")
        });
        inputPasscode.classList.remove('wrong_passcode');
    }

    if (inputPasscode.innerHTML.length == 0) {
        inputPasscode.innerHTML = 'Passcode';
        $(".passcode").css("color", "gray");
        // e.target.classList.add('pointer_none')
    }
}


function login() {
    if (inputPasscode.innerHTML == 1234) {
        console.log('login')
        $('.box').hide();
        $('.main_menu').show()
        localStorage.setItem('passcode', '1234');
    } else {
        wrong_passcode.style.display = 'block';
        inputPasscode.innerHTML = 'Passcode';
        $(".passcode").css("color", "gray");
    }
}

function display_none() {
    wrong_passcode.style.display = 'none';
    [...allNumbers].forEach((e) => {
        e.classList.remove("pointer_none")
    });
}

