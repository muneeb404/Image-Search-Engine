const accessKey = 's2p_o118usmSmpThgf4jSIqLReB-Ru8WZ3l-u3bV5BA';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results ;

    if(page === 1){
        searchResult.innerHTML = "";
    }
    
    results.map((res)=>{
        const image = document.createElement("img");
        const imageLinks = document.createElement("a");

        image.src = res.urls.small;
        imageLinks.href = res.links.html;

        imageLinks.appendChild(image);
        searchResult.appendChild(imageLinks);
    })
    showMoreBtn.style.display ='block';
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener('click', ()=>{
    page++ ;
    searchImages();
})