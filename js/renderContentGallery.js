function renderContentGallery(photoArray) {
    // validation
    //if data doesnt have ant photos
    if(!photoArray){
        return '';
    }

    //logic
    const maxGallerySize = 4;
    const photoCount = photoArray.length;
    const printablePhotosCount = photoCount > maxGallerySize ? maxGallerySize : photoCount;

    //generating only needed amount of images
    let extraHTML = '';
    if(photoCount > maxGallerySize){
        extraHTML = `data-extra = "${photoCount - maxGallerySize}"`;
    }

    let photosHTML = '';
    for(let i = 0; i < printablePhotosCount; i++){
        if(i < printablePhotosCount - 1) {
            photosHTML += `<div class="img">
                                <img src="./img/posts/${photoArray[i]}"
                                alt="User post gallery picture">
                            </div>`;
        } else {
            photosHTML += `<div class="img" ${extraHTML}>
                                <img src="./img/posts/${photoArray[i]}"
                                alt="User post gallery picture">
                            </div>`;
        }   
    }
    return `<div class="gallery gallery-${printablePhotosCount}">
                ${photosHTML}
            </div>`;
}

export default renderContentGallery;