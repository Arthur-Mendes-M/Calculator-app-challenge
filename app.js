// -=--------------------Variables Theme-------------------=-

let toggle = document.getElementById("toggle");
let toggleWidth = toggle.clientWidth;

let switchToggle = document.querySelector(".switchIndicator");
let switchToggleWidth = switchToggle.clientWidth;

let btnTheme = document.getElementById("btnTheme");

let counter = 1;

let html = document.querySelector("html");

let haveTheme = localStorage.getItem("prefers-color-scheme") ? true : false;

let whatTheme = localStorage.getItem("prefers-color-scheme");

// -=------------------------------------------------------=-

// -=--------------------Theme systems---------------------=-

window.addEventListener("load", () => {
    if(haveTheme) {
        html.classList.add(localStorage.getItem("prefers-color-scheme"));
        
        switch (whatTheme) {
            case "themeTwo":
                toggle.style.marginLeft = "calc(50% - .3rem)";   
                counter = 2;             
                break;
            case "themeThree":
                toggle.style.marginLeft = "calc(100% - .8rem)";
                counter = 3;             
                break;
            default:
                toggle.style.marginLeft = 0;
                counter = 1;            
                break;
        }
    }
})

btnTheme.addEventListener("click", changeThemeIndicators)
switchToggle.addEventListener("click", changeThemeIndicators)

function changeThemeIndicators() {
    switch (counter) {
        case 1:
            toggle.style.marginLeft = "calc(50% - .3rem)";
            html.className = "";
            html.classList.add("themeTwo")
            counter++;

            localStorage.setItem("prefers-color-scheme", "themeTwo");

            break;
        case 2:
            toggle.style.marginLeft = "calc(100% - .8rem)";
            html.className = "";
            html.classList.add("themeThree")
            counter++;

            localStorage.setItem("prefers-color-scheme", "themeThree");

            break;
        default:
            toggle.style.marginLeft = 0;
            html.className = "";
            counter = 1;

            localStorage.removeItem("prefers-color-scheme");

            break;
    }
}

// -=------------------------------------------------------=-

// -=------------------Variables Calc----------------------=-

let screen = document.getElementById("screen");
screen.innerHTML = "";
let allKeys = document.querySelectorAll("main button");
let resultBtn = document.getElementById("result");

// -=------------------------------------------------------=-

// -=--------------------Calc system-----------------------=-

allKeys.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.value === "result") {
            let screenValue = screen.innerHTML;
            screen.innerHTML = eval(screenValue.replace("x", "*")).toFixed(2);
        } else if (btn.value === "reset") {
            screen.innerHTML = "";
        } else if (btn.value === "del") {
            delBtn();
        } else {
            screen.innerHTML += btn.value
        }
    })
})

function delBtn() {
    let screenValue = screen.innerHTML;
    screenValue = [...screenValue]
    screenValue.pop();
    screenValue = screenValue.toString().replaceAll(",", "")
    screen.innerHTML = screenValue;
}

// toggle.addEventListener("mouseenter")

screen.addEventListener("mouseenter", () => {
    screen.setAttribute("title", `${screen.textContent}`)
})

// -=------------------------------------------------------=-
