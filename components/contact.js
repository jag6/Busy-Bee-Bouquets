customElements.define('contact-component', class extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['text1', 'text2'];
    }

    attributeChangedCallback(text1, newText1, oldText1, text2, newText2, oldText2) {
        this.innerHTML = `
            <section class="container-header">
                <h2>CONTACT</h2>
            </section>
            <div class="contact-links-text">
                    <div class="links">
                        <ul>
                            <li class="js-scroll fade-in-bottom"><a href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-instagram"></i></a></li>
                            <li class="js-scroll fade-in-bottom"><a href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-whatsapp"></i></a></li>
                            <li class="js-scroll fade-in-bottom"><a href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li class="js-scroll fade-in-bottom"><a href="tel:+18055039770"><i class="fa-solid fa-mobile-screen-button"></i></a></li>
                            <li class="js-scroll fade-in-bottom"><a href="mailto:avilamaddy@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
                        </ul>
                    </div>
            </div>
            <div class="text">
                <div>
                    <p>${newText1}</p>
                </div>
                <div>
                    <p>${newText2}</p>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const text1 = this.getAttribute('text1');
        const text2 = this.getAttribute('text2');
        
        this.innerHTML = `
            <section class="container-header">
                    <h2>CONTACT</h2>
            </section>
            <div class="contact-links-text">
                <div class="contact-links">
                    <ul>
                        <li class="js-scroll fade-in-bottom"><a href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li class="js-scroll fade-in-bottom"><a href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-whatsapp"></i></a></li>
                        <li class="js-scroll fade-in-bottom"><a href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li class="js-scroll fade-in-bottom"><a href="tel:+18055039770"><i class="fa-solid fa-mobile-screen-button"></i></a></li>
                        <li class="js-scroll fade-in-bottom"><a href="mailto:avilamaddy@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
                    </ul>
                </div>
                <div class="contact-text">
                    <div>
                        <p>${text1}</p>
                    </div>
                    <div>
                        <p>${text2}</p>
                    </div>
                </div>
            </div>
        `;
    }
});