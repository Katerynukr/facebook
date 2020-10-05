function renderContentGallery(photoArray) {
    // validation
    //if data doesnt have ant photos
    if(!photoArray){
        return '';
    }

    //logic
    const maxGallerySize = 3;
    const printablePhotosCount = photoArray.length > maxGallerySize ? maxGallerySize : photoArray.length;
    console.log(photoArray);

    //generating only needed amount of images
    let extraHTML = '';
    if(photoArray.length > maxGallerySize){
        extraHTML = `data-extra = "${photoArray.length - maxGallerySize}"`;
    }

    let photosHTML = '';
    for(let i = 0; i < printablePhotosCount; i++){
        if(i < printablePhotosCount - 1) {
            photosHTML += `<img src="./img/posts/${photoArray[i]}"
            alt="User post gallery picture">`;
        } else {
            photosHTML += `<img src="./img/posts/${photoArray[i]}"
                        alt="User post gallery picture"
                        ${extraHTML}>`;
        }   
    }
    return `<div class="gallery gallery-${printablePhotosCount}">
                ${photosHTML}
            </div>`;
}

export default renderContentGallery;