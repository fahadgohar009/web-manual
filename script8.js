// 1. Changing color using this
document.getElementById("colorBtn").addEventListener("click", function () {
    this.style.backgroundColor = 
        this.style.backgroundColor === "tomato" ? "skyblue" : "tomato";
});

// 2. Modify text using this
document.getElementById("textBox").addEventListener("click", function () {
    this.textContent = 
        this.textContent === "FAHAD!" ? "Click me to change text" : "FAHAD!";
});

// 3. Increasing size on hover
document.getElementById("growBox").addEventListener("mouseover", function () {
    this.style.transform = "scale(1.3)";
});

document.getElementById("growBox").addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});

// 4. Moving a box
document.getElementById("moveBox").addEventListener("click", function () {
    this.style.transform =
        this.style.transform === "translateX(150px)" ? "translateX(0)" : "translateX(150px)";
});
