import { ourProcessData, galleryData, faqData } from "./data/home.js";

document.querySelector('#process-steps').innerHTML = `
    ${ourProcessData.map((step) => `
        <section class="process-step js-scroll fade-in-bottom">
            <section class="process-step-header">
                <div><img src="/images/${step.imageSrc}.svg" alt="${step.imageAlt}"></div>
                <h3>${step.title}</h3>
            </section>
            <div class="process-step-description">
                <p>${step.description}</p>
            </div>
        </section>
    `).join('\n')}
`;

document.querySelector('#gallery-images').innerHTML = `
    ${galleryData.map((image) => `
        <div class="js-scroll fade-in-bottom">
            <img src="/images/gallery/${image}.webp" alt="Busy Bee Bouqets Gallery Photo">
        </div>
    `).join('\n')}
`;

document.querySelector('#faq-qa').innerHTML = `
    ${faqData.map((qa) => `
        <section class="qa">
            <section class="question">
                <div><img src="/images/${qa.imageSrc}.svg" alt="the number ${qa.imageSrc}"></div>
                <section><h3>${qa.question}</h3></section>
            </section>
            <div class="answer">
                <p>${qa.answer}</p>
            </div>
        </section>
    `).join('\n')}
`;