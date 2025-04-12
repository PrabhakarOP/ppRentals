

const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';

const carContainer=document.getElementById('car-cards-container');


let page=0; let pageSize=6;


async function searchCars(page, pageSize, searchTerm) {
    try {
        const response = await fetch(`${baseUrl}car?page=${page}&size=${pageSize}&query=${searchTerm}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        if (data.failure) {
            throw new Error(data.error.errorMessage);
        }
        const searchResultsPage = data.content;
        const searchResults = searchResultsPage.content;
        renderSearchResults(searchResults);
    } catch (error) {
        console.error('Error searching cars:', error);
    }
}

async function searchAllCars(page, pageSize) {
    console.log("Fetching all cars");
    try {
        const response = await fetch(`${baseUrl}car?page=${page}&size=${pageSize}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        if (data.failure) {
            throw new Error(data.error.errorMessage);
        }
        const searchResultsPage = data.content;
        const searchResults = searchResultsPage.content;
        renderSearchResults(searchResults);
        const carCard=document.querySelectorAll(".car-card");

        carCard.forEach(card,()=>{
        card.classList.remove("w-[280px]","sm:w-[300px]");
        });
    } catch (error) {
        console.error('Error searching cars:', error);
    }
}

function renderSearchResults(cars) {
    console.log("Rendering search results:", cars);
    carContainer.innerHTML = ''; // Clear existing content
    cars.forEach(car => {
        const carCard = new SearchResultsCarCard(car);
        carContainer.innerHTML += carCard.render();
    });
}



searchAllCars(page, pageSize);


