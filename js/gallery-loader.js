/**
 * Gallery Loader
 *
 * HOW TO ADD PHOTOS:
 * 1. Put your images in the images/optimized/ folder
 * 2. Add them to the list below
 * 3. Refresh your browser — done!
 */

const MY_PHOTOS = [
  // Copy this block for each photo and fill in your details:
  //
  // { file: "your-photo.jpg", title: "Photo Title", category: "Landscape", layout: "normal" },
  //
  // layout options: "normal", "tall" (portrait), "wide" (landscape/panorama)
  //
  // ---- ADD YOUR PHOTOS BELOW THIS LINE ----

  // Ordered for visual flow: alternating layouts, mixing locations for rhythm

  { file: "IMG_1603.JPG", title: "Cliff's Edge", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_1233.JPG", title: "Pink Facade", category: "Lisbon, Portugal", layout: "tall" },
  { file: "IMG_1074.JPG", title: "Night Strings", category: "Street", layout: "normal" },

  { file: "IMG_1959.JPG", title: "Sea Arches", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_1141.JPG", title: "Sentinel Post", category: "Algarve, Portugal", layout: "tall" },
  { file: "IMG_0601.JPG", title: "Evening Swim", category: "Portugal", layout: "normal" },

  { file: "IMG_0673.JPG", title: "Last Light on the Bay", category: "Portugal", layout: "wide" },
  { file: "IMG_1242.JPG", title: "Azulejo Heights", category: "Lisbon, Portugal", layout: "tall" },
  { file: "IMG_1648.JPG", title: "Coastal Silhouette", category: "Algarve, Portugal", layout: "normal" },

  { file: "IMG_1676.JPG", title: "Alone at Golden Hour", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_2956.JPG", title: "Hassan II Overlook", category: "Casablanca, Morocco", layout: "tall" },
  { file: "IMG_0996.JPG", title: "Behind the Pass", category: "Street", layout: "normal" },

  { file: "IMG_1800.JPG", title: "Dusk Roadside", category: "Algarve, Portugal", layout: "wide" },
  { file: "IMG_1235.JPG", title: "City Stroll", category: "Street", layout: "normal" },

  // ---- ADD YOUR PHOTOS ABOVE THIS LINE ----
];

(function () {
  'use strict';

  const grid = document.querySelector('.gallery__grid');
  if (!grid) return;

  // Clear existing gallery items
  grid.innerHTML = '';

  MY_PHOTOS.forEach((photo) => {
    const src = photo.file.startsWith('http')
      ? photo.file
      : `images/optimized/${photo.file}`;

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
      <img
        src="${src}"
        alt="${photo.title} — ${photo.category}"
        width="800"
        height="800"
        loading="lazy"
      >
      <figcaption class="gallery__caption">
        <span class="gallery__caption-title">${photo.title}</span>
        <span class="gallery__caption-cat">${photo.category}</span>
      </figcaption>
    `;

    grid.appendChild(figure);
  });

  // Re-initialize fade-in observer and lightbox for new items
  window.dispatchEvent(new Event('galleryLoaded'));
})();
