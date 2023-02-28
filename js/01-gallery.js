import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
  .map(
    (element) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
  )
  .join("");

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("afterbegin", markup);

galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
	<img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscape);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscape);
      },
    }
  );
  instance.show();
  function onEscape(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
