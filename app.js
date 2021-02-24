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

        const scrollToTop = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener('click', () => {
            scrollToTop();
        })

        mybutton.onkeydown = scrollToTop();
    }

    // clicking call for participation on navbar sends to cfpEn
    const goToCfpEn = () => {
        const cfp = document.querySelector('.dropbtn');
    
        //Toggle Navbar
        cfp.addEventListener('click', () => {
            window.location = 'https://asian-chi.github.io/2021/cfpEn.html'
        })
    }

    const setMobileTable = () => {
        if (window.location.pathname == '/organizers.html') {
            const tableEl = document.querySelector('.ambassadors-table');
            const thEls = tableEl.querySelectorAll('thead th');
            const tdLabels = Array.from(thEls).map(el => el.innerText);
            tableEl.querySelectorAll('tbody tr').forEach( tr => {
                Array.from(tr.children).forEach( 
                (td, ndx) =>  td.setAttribute('label', tdLabels[ndx])
                );
            });
        }
    }

    const submissionSummaryMobile = () => {
        if (window.location.pathname == '/cfpEn.html') {
            const sumTable = document.querySelector('.submission-summary');
            // console.log("function is working");
            const sumTh = sumTable.querySelectorAll('thead th');
            const sumTd = Array.from(sumTh).map(el => {
                return el.innerText; // get the head text 
            }); 
            // console.log(sumTd);
            sumTable.querySelectorAll('tbody tr').forEach( tr => {
                Array.from(tr.children).forEach((td, ndx) => {
                    if (ndx == 0) {
                        console.log("stuff");
                        console.log(td.innerText);
                        td.classList.add('no-before');
                        td.classList.add('title');
                    }
                    else {
                        td.setAttribute('label', sumTd[ndx]);
                    }
                });
            })
        }
    }

    const confTable = () => {
        if (window.location.pathname == '/attending.html') {
            const sumTable = document.querySelector('.rates-category');
            const sumTh = sumTable.querySelectorAll('thead th');
            const sumTd = Array.from(sumTh).map(el => {
                return el.innerText; // get the head text 
            }); 
            // console.log(sumTd);
            sumTable.querySelectorAll('tbody tr').forEach( tr => {
                Array.from(tr.children).forEach((td, ndx) => {
                    if (ndx == 0) {
                        td.classList.add('no-before');
                        td.classList.add('title');
                    }
                    else {
                        td.setAttribute('label', sumTd[ndx]);
                    }
                });
            })
        }
    }
    
    const app = () => {
        navSlide();
        goToSocialMedia();
        goToTopButton();
        triggerLoad();
        goToCfpEn();
        submissionSummaryMobile();
        setMobileTable();
        confTable();
    }
    
    app()
}