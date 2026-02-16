/**
 * Gallery Loader
 *
 * HOW TO ADD PHOTOS:
 * 1. Put your images in the images/optimized/ folder
 * 2. Run the optimization script to generate web sizes
 * 3. Add them to the list below
 * 4. Refresh your browser — done!
 */

const MY_PHOTOS = [
  // Copy this block for each photo and fill in your details:
  //
  // { file: "your-photo", title: "Photo Title", category: "Landscape", layout: "normal" },
  //
  // layout options: "normal", "tall" (portrait), "wide" (landscape/panorama)
  //
  // ---- ADD YOUR PHOTOS BELOW THIS LINE ----

  // Ordered for visual flow: alternating layouts, mixing locations for rhythm

  { file: "IMG_1603", title: "Cliff's Edge", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_1233", title: "Pink Facade", category: "Lisbon, Portugal", layout: "tall" },
  { file: "IMG_1074", title: "Night Strings", category: "Street", layout: "normal" },

  { file: "IMG_1959", title: "Sea Arches", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_1141", title: "Sentinel Post", category: "Algarve, Portugal", layout: "tall" },
  { file: "IMG_0601", title: "Evening Swim", category: "Portugal", layout: "normal" },

  { file: "IMG_0673", title: "Last Light on the Bay", category: "Portugal", layout: "wide" },
  { file: "IMG_1242", title: "Azulejo Heights", category: "Lisbon, Portugal", layout: "tall" },
  { file: "IMG_1648", title: "Coastal Silhouette", category: "Algarve, Portugal", layout: "normal" },

  { file: "IMG_1676", title: "Alone at Golden Hour", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_2956", title: "Hassan II Overlook", category: "Casablanca, Morocco", layout: "tall" },
  { file: "IMG_0996", title: "Behind the Pass", category: "Street", layout: "normal" },

  { file: "IMG_1800", title: "Dusk Roadside", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_1235", title: "City Stroll", category: "Street", layout: "normal" },

  // ---- ADD YOUR PHOTOS ABOVE THIS LINE ----
];

(function () {
  'use strict';

  const grid = document.querySelector('.gallery__grid');
  if (!grid) return;

  grid.innerHTML = '';

  MY_PHOTOS.forEach((photo) => {
    const base = `images/web/${photo.file}`;
    const alt = `${photo.title} — ${photo.category}`;

    const layoutClass = photo.layout === 'tall'
      ? ' gallery__item--tall'
      : photo.layout === 'wide'
        ? ' gallery__item--wide'
        : '';

    const figure = document.createElement('figure');
    figure.className = `gallery__item${layoutClass} fade-in`;
    figure.setAttribute('tabindex', '0');
    figure.setAttribute('role', 'button');

    figure.innerHTML = `
      <picture>
        <source
          type="image/webp"
          srcset="${base}-800w.webp 800w, ${base}-1200w.webp 1200w"
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
        >
        <img
          src="${base}-800w.jpg"
          alt="${alt}"
          width="800"
          height="533"
          loading="lazy"
          decoding="async"
        >
      </picture>
      <figcaption class="gallery__caption">
        <span class="gallery__caption-title">${photo.title}</span>
        <span class="gallery__caption-cat">${photo.category}</span>
      </figcaption>
    `;

    grid.appendChild(figure);
  });

  window.dispatchEvent(new Event('galleryLoaded'));
})();
