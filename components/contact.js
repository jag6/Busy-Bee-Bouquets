customElements.define('contact-component', class extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['header', 'text1', 'text2'];
    }

    attributeChangedCallback(header, newHeader, oldHeader, text1, newText1, oldText1, text2, newText2, oldText2) {
        this.innerHTML = `
            <section class="container">
                <section class="container-header">
                    <h2>${newHeader}</h2>
                </section>
                <div class="contact-links-text">
                    <contactlinks-component class="contact-links"></contactlinks-component>
                    <div class="text">
                        <div<p class="change-contact-text">${newText1}</p></div>
                        <div<p>${newText2}</p></div>
                    </div>
                </div>
            </section>
        `;
    }

    connectedCallback() {
        const header = this.getAttribute('header');
        const text1 = this.getAttribute('text1');
        const text2 = this.getAttribute('text2');
        
        this.innerHTML = `
            <section class="container">
                <section class="container-header">
                        <h2>${header}</h2>
                </section>
                <div class="contact-links-text">
                    <contactlinks-component class="contact-links"></contactlinks-component>
                    <div class="contact-text">
                        <div><p class="change-contact-text">${text1}</p></div>
                        <div><p>${text2}</p></div>
                    </div>
                </div>
            </section>
        `;
    }
});

customElements.define('contactlinks-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <ul>
                <li><a href="https://www.instagram.com/busy_bee_bouquets/" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.pinterest.com/BusyBeeBouquets/_saved/" aria-label="link to Busy Bee Bouquets Pinterest" ><i class="fa-brands fa-pinterest"></i></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=18055039770" aria-label="Whatsapp"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="tel:+18055039770"><i class="fa-solid fa-mobile-screen-button" aria-label="Phone"></i></a></li>
                <li><a href="mailto:blasingamebusiness&commat;gmail&period;com"><i class="fa-regular fa-envelope" aria-label="Email"></i></a></li>
            </ul>
        `;
    }
});
customElements.define('email-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <a class="contact-email" href='mailto:blasingamebusiness&commat;gmail&period;com'><span class="remove-email">HERE</span><span class="remove-email">blasingamebusiness&commat;gmail&period;com</span></a>
        `;
    }
});