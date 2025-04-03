// Sample car data
const cars = [
    {
        id: 1,
        name: "Tesla Model 3",
        price: 150,
        image: "images/tesla-model-3.jpg",
        category: "Electric"
    },
    {
        id: 2,
        name: "BMW 5 Series",
        price: 200,
        image: "images/bmw-5.jpg",
        category: "Luxury"
    },
    // Add more cars as needed
];

// Function to render cars
function renderCars() {
    const carGrid = document.getElementById('carGrid');
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${car.name}</h3>
                <p class="text-gray-600 mb-4">${car.category}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-blue-600">$${car.price}/day</span>
                    <button onclick="bookCar(${car.id})" class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                        Book Now
                    </button>
                </div>
            </div>
        `;
        carGrid.appendChild(carCard);
    });
}

// Function to handle car booking
function bookCar(carId) {
    // Add your booking logic here
    console.log(`Booking car with ID: ${carId}`);
    alert('Booking system coming soon!');
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
});