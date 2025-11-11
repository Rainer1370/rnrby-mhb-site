/* R&R by MHB LLC — gallery helper
   Drop image files in /images and list them below.
   This script will render <figure><img><figcaption></figure> items
   into the .gallery .grid container on gallery.html
*/

(function () {
  // Find the gallery grid on the page (only exists on gallery.html)
  var grid = document.querySelector(".gallery .grid");
  if (!grid) return;

  // TODO: Add/remove your image filenames (relative to /images/)
  // Examples below; replace with your actual set.
  var files = [
    "BathAfter1.jpg",
    "BathBefore1.jpg",
    "BathroomAfter1.jpg",
    "BathroomBefore1.jpg",
    "Flooring1.jpg",
    "Flooring2.jpg"
    // "DeckAfter1.jpg",
    // "DeckBefore1.jpg",
  ];

  // Make a readable caption from a filename, e.g. "BathAfter1.jpg" -> "Bath After"
  function captionFrom(name) {
    var base = name.replace(/^.*[\\/]/, "").replace(/\.[^.]+$/, "");
    // Split on transitions (Before/After), underscores, or dashes
    base = base.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[-_]+/g, " ");
    // Remove trailing numbers
    base = base.replace(/\d+$/, "").trim();
    return base || "Project photo";
  }

  // Render images
  files.forEach(function (file) {
    var figure = document.createElement("figure");

    var img = document.createElement("img");
    img.loading = "lazy";
    img.src = "images/" + file;
    img.alt = captionFrom(file);

    var cap = document.createElement("figcaption");
    cap.textContent = captionFrom(file);

    figure.appendChild(img);
    figure.appendChild(cap);
    grid.appendChild(figure);
  });
})();

