/* R&R by MHB LLC — Safe gallery helper (legacy grid only)
   - If #pairs exists (new Before/After gallery), do nothing.
   - If .gallery .grid exists (legacy gallery), render from `files`.
*/

(function () {
  // If the new Before/After system is present, exit.
  if (document.getElementById("pairs")) return;

  // Legacy grid container for simple galleries
  var grid = document.querySelector(".gallery .grid");
  if (!grid) return;

  // List image files here only if you're using the legacy grid.
  var files = [
    // "BathAfter1.jpg",
    // "BathBefore1.jpg",
    // "Flooring1.jpg",
    // "Flooring2.jpg",
  ];

  function captionFrom(name) {
    var base = name.replace(/^.*[\\/]/, "").replace(/\.[^.]+$/, "");
    base = base.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[-_]+/g, " ");
    base = base.replace(/\d+$/, "").trim();
    return base || "Project photo";
  }

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
