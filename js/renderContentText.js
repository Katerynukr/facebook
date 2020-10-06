function renderContentText(text) {
    const shortTextLength = 60;
    const normalTextLength = 300;
    const largeTextLength = 10000;
    const textLength = text.length; 

    if(textLength <= shortTextLength){
        // changing small text content to larger font
        return `<p class="big-font">${text}</p>`;
    } 
    
    else if(textLength <= normalTextLength ){
        // leaving text without changes
        return `<p>${text}</p>`;
    } 
    
    else if (textLength <= largeTextLength){
        //cutting too long text and adding see more button;
        let shorterText = "";
        for(let i = 0; i < normalTextLength; i++){
            shorterText +=text[i];
        }
        return `<p>${shorterText}...<span class="see-more">See more</p>  
                <p class="hidden">${text}...<span class="see-more">See less</p>`;
    } 
    
    else {
        // if text is too large to generate a feed -  showing error
        console.warn(`ERROR: over exeed ${largeTextLength} sign limit.`)
        return '';
    }
}

export default renderContentText;