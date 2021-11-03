"use strict";

import { galleryItems } from './gallery-items.js';
console.log(galleryItems)
// Описан в документации
 import SimpleLightbox from "simplelightbox";
 console.log(SimpleLightbox)
import "simplelightbox/dist/simple-lightbox.min.css";


const imgContainer = document.querySelector('.gallery');
let galleryMarkup = createMarkup(galleryItems);

imgContainer.innerHTML = galleryMarkup;

function createMarkup(galleryData) {
  return galleryData.map(({preview, original, description}) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  }).join('');  
};

const modal = new SimpleLightbox('.gallery a');
