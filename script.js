const galllery = document.getElementById("gallery");

for (let i = 1; i<=16; i++) {
    // ajoute un élément HTML
    galllery.innerHTML +=
    `<div class="col-12 col-sm-6 col-lg-4 ">
        <img src="img/gallery/img_gallery${i}.jpg" 
        class="img-fluid rounded shadow "
        alt="image_intervention_nuisibles${i}"></img>

    </div>`;
} 