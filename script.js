// button click waiting
document.getElementById("submit").addEventListener("click", function () {

    const name = document.getElementById("name").value.trim(); // ✅ FIXED

    if (!name) {
        alert("Please enter your name!!");
        return; // ✅ return ONLY if name is empty
    }

    // ✅ save to localStorage
    localStorage.setItem("username", name);

    // ✅ redirect
    window.location.href = "welcome.html";
});
