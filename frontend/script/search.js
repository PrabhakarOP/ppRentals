const searchInput = document.getElementById('search-input');
const searchBar = document.getElementById('search-bar');
const searchResultsPopup = document.getElementById('search-results-popup');
const searchResultsContainer = document.getElementById('search-results');

searchInput.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log("serachterm: "+searchTerm);
            searchCars(searchTerm);
        } 
    }
});


async function searchCars(searchTerm) {
    try {
        const response = await fetch(`${baseUrl}car/search?query=${searchTerm}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        if (data.failure) {
            throw new Error(data.error.errorMessage);
        }
        const searchResults = data.content;
        renderSearchResults(searchResults);
    } catch (error) {
        console.error('Error searching cars:', error);
    }
}

function renderSearchResults(searchResults) {
    searchResultsContainer.innerHTML = '';
    searchResults.forEach((result) => {
        const resultHTML = `
            <a href="/html/vehicle-info.html?id=${result.id}" class="search-result py-2 border-b border-gray-200 last:border-b-0">
            <div class="search-result py-2 border-b border-gray-200 last:border-b-0">
                <h2 class="text-lg font-bold">${result.model}</h2>
                <p class="text-sm text-gray-600">Rs-${result.pricePerDay}/day</p>
            </div>
            </a>
        `;
        searchResultsContainer.insertAdjacentHTML('beforeend', resultHTML);
    });
    // Show the popup container
    searchResultsPopup.classList.remove('hidden');
}

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', () => {
    searchResultsPopup.classList.add('hidden');
});