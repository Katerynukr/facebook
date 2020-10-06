import renderSinglePost from './renderSinglePost.js';

function renderPosts(data){
  
    //VALIDATION 

    //LOGIC

    let HTML = '';

    for (let i = 0; i < data.length; i++){
        const post = data[i];
        
        HTML += renderSinglePost(post);
        
    }
    
    //SEARCH OF EL IN REAL HTML FILE
    const feedDOM = document.querySelector("main");

    //ADDING CONTENT TO HTML FILE

    feedDOM.innerHTML = HTML;

    //Puting interaction on elements
    const allSeeMoreDOM =   document.querySelectorAll(".post .see-more");

    //Looping through each found see-more element to add class
    for (let i = 0; i < allSeeMoreDOM.length; i++){
        const seeMore = allSeeMoreDOM[i];

        seeMore.addEventListener('click', function () {
            //finding closed father element .content
            const contentDOM = seeMore.closest('.content');
            //adding class on the element
            contentDOM.classList.toggle('show');
        });
    }

    // //Looping through each found see-more element to remove class
    // for (let j = 0; j < allSeeMoreDOM.length; j++){
    //     const seeMore = allSeeMoreDOM[j];

    //     seeMore.addEventListener('click', function () {
    //         //finding closed father element .content
    //         const contentDOM = seeMore.closest('.content');
    //         //adding class on the element
    //         contentDOM.classList.remove('show');
    //     });
    // }
    

} 

export default renderPosts;