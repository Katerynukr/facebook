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

} 

export default renderPosts;