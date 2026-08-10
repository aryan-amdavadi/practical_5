const form = document.getElementById("registrationForm");
const alertBox = document.getElementById("alertBox");

function showAlert(msg) {
alertBox.textContent = msg;
alertBox.style.display = "block";

```
setTimeout(() => {
    alertBox.style.display = "none";
}, 2500);
```

}

form.addEventListener("submit", function(e) {
e.preventDefault();

```
const name = document.getElementById("name").value;

if (name === "") {
    showAlert("Fill all required fields");
    return;
}

showAlert("Registration Successful 🌿");
form.reset();
```

});

/* PASSWORD BAR */
document.getElementById("password").addEventListener("input", function() {
let val = this.value;
let bar = document.getElementById("strengthBar");

```
if (val.length < 6) bar.style.width = "30%";
else if (val.length < 10) bar.style.width = "60%";
else bar.style.width = "100%";
```

});
