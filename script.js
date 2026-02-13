const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const warningText = document.getElementById("warningText");

const stage1 = document.getElementById("stage1");
const stage2 = document.getElementById("stage2");
const stage3 = document.getElementById("stage3");
const secretBtn = document.getElementById("secretBtn");

let attempts = 0;

// Make No button move
function moveNoButton() {
    const buttonArea = document.querySelector(".buttons");

    const areaWidth = buttonArea.offsetWidth;
    const areaHeight = buttonArea.offsetHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = areaWidth - btnWidth;
    const maxY = areaHeight - btnHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    attempts++;

    if (attempts === 3) {
        warningText.textContent = "Stop trying. It won’t happen.";
        yesBtn.style.transform = "scale(1.2)";
    }
}

// Laptop hover
noBtn.addEventListener("mouseover", moveNoButton);

// iPhone touch
noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
});

// Yes click → Stage 2
yesBtn.addEventListener("click", function () {
    stage1.classList.add("hidden");
    stage2.classList.remove("hidden");
});

// Secret click → Stage 3
secretBtn.addEventListener("click", function () {
    stage2.classList.add("hidden");
    stage3.classList.remove("hidden");
});
