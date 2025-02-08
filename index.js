function MenuItem(name, text, image) {
    this.name = name;
    this.text = text;
    this.image = image;
}

var menuList = {
    kaprao: new MenuItem("kaprao", "ผัดกะเพราหมูสับ", "./images/kaprao.png"),
    khana: new MenuItem("khana", "คะน้าหมูกรอบ", "./images/khana.png"),
    porkgalic: new MenuItem("porkgalic", "หมูทอดกระเทียม", "./images/porkgalic.png"),
    omelette: new MenuItem("omelette", "ไข่เจียว", "./images/omelette.png"),
    radnha: new MenuItem("radnha", "ราดหน้า", "./images/radnha.png"),
    phadphak: new MenuItem("phadphak", "ผัดผักรวม", "./images/phadphak.png")
};

var currentMenu = null;
var previousMenu = null;

function updateMenu(menuItem) {
    $(".menu").text(menuItem.text);
    $("img").attr("src", menuItem.image);
    previousMenu = menuItem.name;
}

$("button").click(function () {
    var menuKeys = Object.keys(menuList);
    var randomMenu;

    do {
        randomMenu = menuKeys[Math.floor(Math.random() * menuKeys.length)];
    } while (randomMenu === previousMenu);

    currentMenu = menuList[randomMenu];
    updateMenu(currentMenu);
});
