const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';

//car data
let popularCars={
    "suv":[],
    "sedan":[],
    "hatchback":[],
    "luxury":[],
    "electric":[]
}

async function fetchPopularCars() {
    //for suv
    try {
        const response = await fetch(`${baseUrl}car/bodytype?bodyType=SUV&page=0&size=10}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //check data
        if(data.isFailure){
            throw new Error('Data fetch failed');
        }
        console.log(data);
        // popularCars.suv=data.content;
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
}

fetchPopularCars();

// Function to render cars


// Function to handle car booking
function bookCar(carId) {
    // Add your booking logic here
    console.log(`Booking car with ID: ${carId}`);
    alert('Booking system coming soon!');
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // renderCars();
    console.log("Website initialized");
});