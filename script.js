const toggleBtn = document.getElementById("toggleFormBtn");
    const form = document.getElementById("loginForm");

    toggleBtn.addEventListener("click", function () {
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "flex";
        } else {
            form.style.display = "none";
        }
    });

    const toggleBtn2 = document.getElementById("toggleBtn2");
const exploreSection = document.getElementById("exploreSection");

toggleBtn2.addEventListener("click", function () {
    if (exploreSection.style.display === "none" || exploreSection.style.display === "") {
        exploreSection.style.display = "block";
    } else {
        exploreSection.style.display = "none";
    }
});


    function toggleMenu() {
    document.querySelector("#navbar ul").classList.toggle("active");
    document.querySelector(".burger").classList.toggle("active");
}

    const gymLine = document.querySelector('.typewriter-line');
    setTimeout(() => {
    gymLine.classList.add('hide-cursor');
    }, 1000);
