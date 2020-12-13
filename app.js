window.onload = function() {
    const navSlide = () => {
        const burger = document.querySelector('.burger-menu');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const shadowBackground = document.querySelector('.shadow-background');
    
        //Toggle Navbar
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
    
            //Animate Links
            /*navLinks.forEach((link, index) => {
                if (link.style.animation){
                    link.style.animation = '';
                }
                else{
                    //link.style./animation = `navLinkFade 0.5s ease forwards ${index / 8}s`
                }
            });*/
    
            //Burger Animation
            burger.classList.toggle('toggle');
    
            //Add shadow background
            shadowBackground.classList.toggle('shadow');
        })
    }

    const triggerLoad = () => {
        const loader = document.getElementById("loader-wrapper");
        $('#loader-wrapper').fadeOut('slow');
    }
    
    const goToSocialMedia = () => {
        document.getElementById("twitter").onclick = function() {
            location.href='https://twitter.com/asian_chi_conf';
        };

        document.getElementById("facebook").onclick = function() {
            location.href='https://www.facebook.com/Asian-CHI-2021-Symposium-105802457964677';
        };
    }

    //Get the button:
    const goToTopButton = () => {
        const mybutton = document.getElementById("goToTop");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() { scrollFunction() };
    
        const scrollFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener('click', () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        })
    }
    
    const app = () => {
        navSlide();
        goToSocialMedia();
        goToTopButton();
        triggerLoad();
    }
    
    app()
}