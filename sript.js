const avatar = document.querySelector('.avatar');
const hero = document.querySelector('.portfolio-hero');
const objectiveSection = document.querySelector('#objective');

const morphOptions = {
    threshold: 0.25, // Trigger when 25% of the next section is visible
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Objective Section is visible: Morph the Avatar and Hide the Hero Text
            avatar.classList.add('avatar-at-objective');
            hero.classList.add('hero-faded');
        } else {
            // User scrolled back up: Reset everything
            avatar.classList.remove('avatar-at-objective');
            hero.classList.remove('hero-faded');
        }
    });
}, morphOptions);

observer.observe(objectiveSection);

function openViewer(src, title) {
    document.getElementById("assetViewer").style.display = "flex";
    document.getElementById("fullImg").src = src;
    document.getElementById("imgTitle").innerText = "// FILE: " + title + " // PROJECT_TYPE: PSD_ASSET";
}
function closeViewer() {
    document.getElementById("assetViewer").style.display = "none";
}




