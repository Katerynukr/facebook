import renderHeader from './renderHeader.js';
import renderContent from './renderContent.js';
import renderFooter from './renderFooter.js';


function renderSinglePost(data){
    //checking what is given in a data
    // console.log(data);
    return `<div class="post" id="post_${data.id}">
                ${renderHeader(data.author, data.postTimestamp)}
                ${renderContent(data.content, data.id)}
                ${renderFooter()}
            </div>`;
}


export default renderSinglePost;

