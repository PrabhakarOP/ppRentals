const searchBar=document.getElementById('search-bar');

searchBar.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        window.location.href='../html/search-results.html';
    }
})