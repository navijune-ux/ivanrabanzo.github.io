const portfolio = document.getElementById("portfolio");

const pages = document.querySelectorAll(".portfolio-page");

const currentPage = document.getElementById("currentPage");

const progressBar = document.getElementById("progressBar");

const prevButton = document.getElementById("prevButton");

const nextButton = document.getElementById("nextButton");


let currentIndex = 0;


/* ========================================
   UPDATE PAGE NUMBER
======================================== */

function updatePage() {

    currentPage.textContent =
        String(currentIndex + 1).padStart(2, "0");


    const progress =
        ((currentIndex + 1) / pages.length) * 100;


    progressBar.style.width =
        progress + "%";
}


/* ========================================
   GO TO SPECIFIC PAGE
======================================== */

function goToPage(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= pages.length) {
        index = pages.length - 1;
    }


    currentIndex = index;


    pages[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    updatePage();
}


/* ========================================
   NEXT BUTTON
======================================== */

nextButton.addEventListener(
    "click",
    () => {

        goToPage(
            currentIndex + 1
        );

    }
);


/* ========================================
   PREVIOUS BUTTON
======================================== */

prevButton.addEventListener(
    "click",
    () => {

        goToPage(
            currentIndex - 1
        );

    }
);


/* ========================================
   KEYBOARD ARROWS
======================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "ArrowDown") {

            goToPage(
                currentIndex + 1
            );

        }

        if (event.key === "ArrowUp") {

            goToPage(
                currentIndex - 1
            );

        }

    }
);


/* ========================================
   DETECT VERTICAL SCROLL
======================================== */

window.addEventListener(
    "scroll",
    () => {

        let closestPage = 0;

        let smallestDistance =
            Infinity;


        pages.forEach(
            (page, index) => {

                const distance =
                    Math.abs(
                        page.offsetTop -
                        window.scrollY
                    );


                if (
                    distance <
                    smallestDistance
                ) {

                    smallestDistance =
                        distance;

                    closestPage =
                        index;

                }

            }
        );


        if (
            closestPage !==
            currentIndex
        ) {

            currentIndex =
                closestPage;

            updatePage();

        }

    }
);


/* ========================================
   INITIALIZE
======================================== */

updatePage();