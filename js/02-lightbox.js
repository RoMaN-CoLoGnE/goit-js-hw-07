import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
  .map(
    (element) =>
      `
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
    />
  </a>`
  )
  .join("");

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
