// typing
var typed = new Typed('.typing', {
    strings:["Web Developer", "Web Designer", "Freelancer", "Hikikomori", "Neet", "Fan Anime"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})
// aside menu
const nav = document.querySelector(".nav"),
    navList = document.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener('click', function() {
            removeBackSection();
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                   // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this)
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const taget = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+taget).classList.add("active");

    }
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener('click', function() {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
        }

// JavaScript để thay đổi tốc độ cuộn
var marquee = document.getElementById("myMarquee");
var speed = 1; // Tốc độ cuộn (pixels/giây)

marquee.onmouseover = function() {
  speed = 0; // Tạm dừng marquee khi di chuột qua
};

marquee.onmouseout = function() {
  speed = 1; // Khôi phục tốc độ khi di chuột ra khỏi marquee
};

function moveMarquee() {
  marquee.scrollLeft += speed;
  if (marquee.scrollLeft >= marquee.scrollWidth - marquee.clientWidth) {
    marquee.scrollLeft = 0;
  }
  requestAnimationFrame(moveMarquee);
}

moveMarquee(); // Bắt đầu cuộn marquee
