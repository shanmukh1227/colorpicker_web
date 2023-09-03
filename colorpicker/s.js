let v = document.getElementById("button1")
let f = document.getElementById("button2");
let ff = document.getElementById("button3")
let fff = document.getElementById("button4")

function firstcolor() {
    let y = v.textContent;

    document.getElementById("colorPickerContainer").style.backgroundColor = y;
    document.getElementById("selectedColorHexCode").textContent = y;
}

function secondcolor() {
    //let v = document.getElementById("button2").textContent;
    let yy = f.textContent;
    document.getElementById("colorPickerContainer").style.backgroundColor = yy;
    document.getElementById("selectedColorHexCode").textContent = yy;


}

function thirdcolor() {
    let yyy = ff.textContent;
    document.getElementById("colorPickerContainer").style.backgroundColor = yyy;
    document.getElementById("selectedColorHexCode").textContent = yyy;


}

function forthcolor() {
    let yyyy = fff.textContent;
    document.getElementById("colorPickerContainer").style.backgroundColor = yyyy;
    document.getElementById("selectedColorHexCode").textContent = yyyy;

}