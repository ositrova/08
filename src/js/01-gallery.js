// Завдання 1 - бібліотека SimpleLightbox​

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. 
// Розбий його на декілька підзавдань:

// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи 
// npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але 
// виконай рефакторинг з урахуванням того, що бібліотека була встановлена 
// через npm (синтаксис import/export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати
//  ще один імпорт, крім того, що описаний в документації.

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
// console.log (SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`,
  '',
);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });

