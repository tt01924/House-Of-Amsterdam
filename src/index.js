// *********** Javascript for help popup *************
document.addEventListener("DOMContentLoaded", function() {
    // Get the instructions popup and the button to show instructions
    var indexHelpPopup = document.getElementById("indexHelpPopup");
    var indexShowHelpBtn = document.getElementById("indexShowHelp");
    
    var indexPopupCloseBtn = document.getElementById("indexPopupClose");
    
    indexShowHelpBtn.addEventListener("click", function() {
        indexHelpPopup.style.display = "block";
    });
    
    // When the user clicks on the close button, hide the instructions popup
    indexPopupCloseBtn.addEventListener("click", function() {
        indexHelpPopup.style.display = "none";
    });
    
    window.addEventListener("click", function(event) {
        if (event.target == indexHelpPopup) {
            indexHelpPopup.style.display = "none";
        }
    });
    window.scrollToSection = scrollToSection
});


// *********** JavaScript for carousel functionality ***********
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const slides = carousel.querySelector(".slides");
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    prevButton.addEventListener('click', () => {
        console.log("trying to scroll")
        slides.scrollBy({
            left: -slides.offsetWidth,
            behavior: 'smooth'
        });
    });
    
    nextButton.addEventListener('click', () => {
        slides.scrollBy({
            left: slides.offsetWidth,
            behavior: 'smooth'
        });
    });
})


// ************ Smooth scroll js to research projects *********
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
} 

document.querySelectorAll(".research-button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        scrollToSection(id)
    })
})