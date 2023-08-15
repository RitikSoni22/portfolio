// theme toggle
document.getElementById('toggle-theme-button').onclick = () => {
    document.body.className = (document.body.className == "dark-mode") ? "light-mode" : "dark-mode";
}

// navbar sticky on scroll
window.onscroll = () => {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > navbar.offsetTop) {
        console.log('sticky');
        navbar.classList.add("sticky");
        document.getElementById("navbar-initials").innerHTML = "Ritik Soni";
    } else {
        console.log('not-sticky');
        navbar.classList.remove("sticky");
        document.getElementById("navbar-initials").innerHTML = "RS";
    }
};

// type writer text
var i = 0;
var txt = "Hey! I'm Ritik Soni.";
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("my-name").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();