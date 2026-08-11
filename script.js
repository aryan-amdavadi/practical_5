/* CURSOR GLOW */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";
});

/* VALIDATION */
const inputs = document.querySelectorAll("input");

inputs.forEach(input=>{
input.addEventListener("input", ()=>{
const parent = input.parentElement;
const status = parent.querySelector(".icon-status");


    if(input.checkValidity()){
        parent.classList.add("valid");
        parent.classList.remove("invalid");
        status.className = "fa-solid fa-check icon-status";
    } else {
        parent.classList.add("invalid");
        parent.classList.remove("valid");
        status.className = "fa-solid fa-xmark icon-status";
    }
});


});

const pass = document.getElementById("password");
const bar = document.getElementById("bar");
const text = document.getElementById("strengthText");

pass.addEventListener("input", () => {
    let v = pass.value;
    let score = 0;

    if (v.length >= 8) score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[@$!%*?&]/.test(v)) score++;

    let colors = ["#ff4d4d","#ffa500","#6bc79c","#00ff99"];
    let labels = ["Weak","Medium","Good","Strong"];

    bar.style.width = (score * 25) + "%";
    bar.style.background = colors[score-1] || "#444";
    text.textContent = v ? labels[score-1] || "Too Weak" : "";
});
