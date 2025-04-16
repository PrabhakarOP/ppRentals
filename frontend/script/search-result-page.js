const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';

const carContainer=document.getElementById('car-cards-container');

let page=0; let pageSize=6; let totalPages; let searchTerm;

// async function searchCars(page, pageSize, searchTerm) {
//     try {
//         const response = await fetch(`${baseUrl}car?page=${page}&size=${pageSize}&query=${searchTerm}`);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log(data);

//         if (data.failure) {
//             throw new Error(data.error.errorMessage);
//         }
//         const searchResultsPage = data.content;
//         totalPages=searchResultsPage.totalPages;
//         const cars = searchResultsPage.content;
//         renderCars(cars);
//         renderPagination(totalPages);
//     } catch (error) {
//         console.error('Error searching cars:', error);
//     }
// }

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
        const cars = searchResultsPage.content;
        renderCars(cars);
        renderPagination(searchResultsPage.totalPages);
    } catch (error) {
        console.error('Error searching cars:', error);
    }
}

function renderCars(cars) {
    console.log("Rendering search results:", cars);
    carContainer.innerHTML = ''; // Clear existing content
    cars.forEach(car => {
        const carCard = new SearchResultsCarCard(car);
        carContainer.innerHTML += carCard.render();
    });
}

function renderPagination(totalPages) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = ''; // Clear existing content

    for (let i = 0; i < totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.classList.add('bg-[#373737]','text-white', 'px-3', 'py-1', 'rounded-md', 'hover:bg-red-500');
        pageLink.textContent = i + 1;
        pageLink.addEventListener('click', () => searchAllCars(i, pageSize));
        paginationContainer.appendChild(pageLink);
    }
}

searchAllCars(page, pageSize);

