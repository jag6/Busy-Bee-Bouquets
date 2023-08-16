customElements.define('header-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <header>
                <div class="logo">
                    <a href="/">
                        <img src="images/BBB-logo.png" alt="Busy Bee Bouqets logo">
                    </a>
                </div>
                <nav class="desktop-nav">
                    <nav-component></nav-component>
                </nav>
                <hflinks-component class="desktop-hf-links"></hflinks-component>
                <div id="hamburger-icon" class="hamburger-icon">
                    <div id="hi-inner" class="hi-inner">
                        <span class="one"></span>
                        <span class="two">
                            <span></span>
                            <span></span>
                        </span>
                        <span class="three"></span>
                    </div>
                </div>
                <div id="nav-overlay" class="nav-overlay">
                    <div id="mobile-nav" class="mobile-nav">
                        <nav>
                            <nav-component></nav-component>
                        </nav>
                        <hflinks-component></hflinks-component>
                    </div>
                </div>
            </header>
        `;

        //TOGGLE NAV MENU
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const mobile_nav = document.getElementById('mobile-nav');
        const nav_overlay = document.getElementById('nav-overlay');
        const body = document.querySelector('body');

        //remove nav menu
        const clickOff = () => {
            nav_overlay.style.display = 'none';
            mobile_nav.style.width = '0%';
            body.style.overflow = 'auto';
            hamburgerIcon.classList.toggle('clicked');
        };
        //toggle nav menu when hamuburger icon is clicked
        hamburgerIcon.addEventListener('click', () => {
            if(mobile_nav.style.width === '300px') {
                clickOff();
            }else {
                mobile_nav.style.width = '300px';
                nav_overlay.style.display = 'flex';
                body.style.overflow = 'hidden';
                hamburgerIcon.classList.toggle('clicked');
            }
        });
        //remove nav menu when nav overlay is clicked
        nav_overlay.addEventListener('click', (e) => {
            if(e.target == nav_overlay) {
                clickOff();
            }
        });
    }
});

customElements.define('nav-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <ul class="page-links">
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/portfolio">PORTFOLIO</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
        `;
    }
});

customElements.define('hflinks-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <ul class="hf-links">
                <li><a aria-label="link to Busy Bee Bouquets Instagram" href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a aria-label="Busy Bee Bouquets phone number" href="tel:+18055039770"><i class="fa-solid fa-mobile-screen-button"></i></a></li>
                <li><a aria-label="Busy Bee Bouquets email" href="mailto:avilamaddy@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
            </ul>
        `;
    }
});