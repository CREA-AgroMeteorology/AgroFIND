let slideIndex = [1, 1, 1, 1]; // Un indice per ogni galleria
let slideId = ['galleria1', 'galleria2', 'galleria3', 'galleria4'];

function showGallery(galleryId) {
    const galleries = document.querySelectorAll('.gallery');
    
    // Nascondi tutte le gallerie
    galleries.forEach(gallery => {
        gallery.style.display = 'none';
    });

    // Mostra la galleria selezionata
    document.getElementById(galleryId).style.display = 'block';
    
    // Mostra la prima immagine della galleria selezionata
    let galleryIndex = slideId.indexOf(galleryId);
    showSlides(slideIndex[galleryIndex], galleryIndex);
}

function plusSlides(n, galleryIndex) {
    showSlides(slideIndex[galleryIndex] += n, galleryIndex);
}

function showSlides(n, galleryIndex) {
    let slides = document.querySelectorAll(`#${slideId[galleryIndex]} .slide`);
    if (n > slides.length) {
        slideIndex[galleryIndex] = 1;
    }
    if (n < 1) {
        slideIndex[galleryIndex] = slides.length;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex[galleryIndex] - 1 ? 'block' : 'none';
    });
}
