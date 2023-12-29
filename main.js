function showMenu(){
    const showSidebar = document.querySelector(".sidebar").style;
    showSidebar.display = "flex";
}

function hideMenu(){
    const hideSidebar = document.querySelector(".sidebar").style;
    hideSidebar.display = "none";
    
}

// For scrolling animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));