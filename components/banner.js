customElements.define('banner-component', class extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['imageSrc', 'imageAlt', 'text1', 'text2']
    }

    attributeChangedCallback(imageSrc, newImageSrc, oldImageSrc, imageAlt, newImageAlt, oldImageAlt, text1, newText1, oldText1, text2, newText2, oldText2) {
        this.innerHTML = `
            <section class="banner">
                <div class="banner-img">
                    <img ${newImageSrc} alt="${newImageAlt}">
                </div>
                <section id="banner-text" class="banner-text">
                    <section><h1>${newText1}</h1></section>
                    <section><h2>${newText2}</h2></section>
                </section>
            </section>
        `;
    }

    connectedCallback() {
        const imageSrc = this.getAttribute('imageSrc');
        const imageAlt = this.getAttribute('imageAlt');
        const text1 = this.getAttribute('text1');
        const text2 = this.getAttribute('text2');

        this.innerHTML = `
            <section class="banner">
                <div class="banner-img">
                    <img src="/images/banner/${imageSrc}-banner.webp" alt="${imageAlt}">
                </div>
                <section id="banner-text" class="banner-text">
                    <section><h1>${text1}</h1></section>
                    <section><h2>${text2}</h2></section>
                </section>
            </section>
        `;
    }
});

if(document.querySelector('#home-banner')) {
    //add down arrow to home banner
    const arrowDiv = document.createElement('div');
    arrowDiv.classList.add('down-arrow');
    arrowDiv.innerHTML = `
        <a href="/#wedding-floristry"><i class="fa-solid fa-arrow-down"></i></a>
    `;
    const bannerText = document.querySelector('#banner-text');
    bannerText.appendChild(arrowDiv);

    //tinker with arrow animation
    setTimeout(() => {
        arrowDiv.style.animation = 'pulse 2s infinite ease-in-out'; 
    }, 6000);
    arrowDiv.addEventListener('mouseenter', () => {
        arrowDiv.style.animationDelay = '2s';
    });
    window.addEventListener('scroll', () => {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            arrowDiv.style.animation = 'none';
        }else {
            arrowDiv.style.animation = 'pulse 2s infinite ease-in-out'; 
        }
    });
}