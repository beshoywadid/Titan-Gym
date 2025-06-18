const toggleBtn = document.getElementById("toggleFormBtn");
    const form = document.getElementById("loginForm");

    toggleBtn.addEventListener("click", function () {
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "flex";
        } else {
            form.style.display = "none";
        }
    });

    function toggleMenu() {
    document.querySelector("#navbar ul").classList.toggle("active");
    document.querySelector(".burger").classList.toggle("active");
}
