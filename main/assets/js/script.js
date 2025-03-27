document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const navbar = document.querySelector(".navbar");

    if (!menuToggle || !mobileMenu || !navbar) return; // Ensure elements exist

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        mobileMenu.classList.toggle("active");

        // Ensure menu is shown when active
        if (mobileMenu.classList.contains("active")) {
            mobileMenu.style.display = "block";
        } else {
            mobileMenu.style.display = "none";
        }

        // Toggle 'open' class for menu icon animation
        menuToggle.classList.toggle("open");
    });

    // Close Menu When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove("active");
            mobileMenu.style.display = "none"; // Hide menu
            menuToggle.classList.remove("open");
        }
    });

    // Close Menu When Clicking a Link
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            mobileMenu.style.display = "none";
            menuToggle.classList.remove("open");
        });
    });

    // Scroll Effect for Navbar Shrinking
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".comment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let commentText = document.querySelector(".comment-form textarea").value;
    if (commentText.trim() !== "") {
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;
        document.querySelector(".comments").appendChild(newComment);
        document.querySelector(".comment-form textarea").value = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownTrigger = document.querySelector("#mobileCategories");

    if (dropdownTrigger) {
        new bootstrap.Dropdown(dropdownTrigger);
    } else {
        console.error("Dropdown trigger not found!");
    }
});
