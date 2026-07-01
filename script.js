const galllery = document.getElementById("gallery");

for (let i = 1; i<=29; i++) {
    // ajoute un élément HTML
    galllery.innerHTML +=
    `<div class="col-6 col-md-4 col-lg-3 ">
        <img src="img/gallery/img_gallery${i}.jpg" 
        class="img-fluid rounded shadow "
        alt="image_intervention_nuisibles${i}"></img>

    </div>`;
} 