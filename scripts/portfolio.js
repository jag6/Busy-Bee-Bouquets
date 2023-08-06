import { portfolioData } from "./data/portfolio.js";

document.querySelector('#portfolio-images').innerHTML = `
    ${portfolioData.map((image) => `
        <li class="portfolio-img">
            <img src="/images/portfolio/${image}.webp" alt="an image from Busy Bee Bouqets portfolio">
        </li>
    `).join('\n')}
`;
document.querySelector('#modal-images').innerHTML = `
    ${portfolioData.map((image) => `
        <li class="modal-img">
            <img src="/images/portfolio/${image}.webp" alt="an image from Busy Bee Bouqets portfolio">
        </li>
    `).join('\n')}
`;


const portfolioModal = document.getElementById('portfolio-modal');

//open modal
const portfolioImages = document.querySelectorAll('.portfolio-img');
portfolioImages.forEach((image) => {
    image.addEventListener('click', (n) => {
        portfolioModal.style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';

        //view clicked image
        const index = [...image.parentElement.children].indexOf(image);
        n = index + 1;
        showImages(imageIndex = n);
    });
});

//close modal
document.getElementById('close-modal').addEventListener('click', () => {
    portfolioModal.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
});

//cycle through modal
const showImages = (n) => {
    let images = document.querySelectorAll('.modal-img');
    if(n > images.length) { imageIndex = 1 }
    if(n < 1) { imageIndex = images.length }
    images.forEach((image) => {
        image.style.display = 'none';
    }); 
    images[imageIndex - 1].style.display = 'flex';
};

let imageIndex = 1;
showImages(imageIndex);

document.getElementById('next-modal').addEventListener('click', (n) => {
    n = 1;
    showImages(imageIndex += n);
});
document.getElementById('prev-modal').addEventListener('click', (n) => {
    n =-1;
    showImages(imageIndex += n)
});