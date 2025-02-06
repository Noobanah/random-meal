var mainMenu = ["kaprao", "khana", "porkgalic", "omelette", "radnha", "phadphak"];
var currentMenu = "test";
var previousMenu = "test";

$("button").click(function () {
    var randomMenu = Math.floor(Math.random() * 6);
    currentMenu = mainMenu[randomMenu];
    if (previousMenu === currentMenu) {
        while (previousMenu === currentMenu) {
            var randomMenu = Math.floor(Math.random() * 6);
            currentMenu = mainMenu[randomMenu];
        }
    }
    if (currentMenu === "kaprao") {
        kaprao();
    } else if (currentMenu === "khana") {
        khana();
    } else if (currentMenu === "phadphak") {
        phadphak();
    } else if (currentMenu === "porkgalic") {
        porkgalic();
    } else if (currentMenu === "omelette") {
        omelette();
    } else if (currentMenu === "radnh") {
        radnha();
    }
})

function kaprao() {
    $(".menu").text("ผัดกะเพราหมูสับ");
    document.querySelectorAll("img")[0].setAttribute("src", "./images/kaprao.png");
    previousMenu = "kaprao";
}

function khana() {
    $(".menu").text("คะน้าหมูกรอบ");
    document.querySelectorAll("img")[0].setAttribute("src", "./images/khana.png");
    previousMenu = "khana";
}

function porkgalic() {
    $(".menu").text("หมูทอดกระเทียม");
    document.querySelectorAll("img")[0].setAttribute("src", "./images/porkgalic.png");
    previousMenu = "porkgalic";
}

function omelette() {
    $(".menu").text("ไข่เจียว");
    document.querySelectorAll("img")[0].setAttribute("src", "./images/omelette.png");
    previousMenu = "omelette";
}

function radnha() {
    $(".menu").text("ราดหน้า");
    document.querySelectorAll("img")[0].setAttribute("src", "./images/radnha.png");
    previousMenu = "radnha";
}

function phadphak() {
    $(".menu").text("ผัดผักรวม");
    document.querySelectorAll("img")[0].setAttribute("src", "./images/phadphak.png");
    previousMenu = "phadphak";
}