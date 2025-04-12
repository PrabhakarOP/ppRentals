const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';

const loggedIn=localStorage.getItem('loggedIn');
const userEmail=localStorage.getItem('useremail');

if(!loggedIn){
    window.location.href='/html/login.html';
}


//car data
let popularCars={
    "suv":[],
    "sedan":[],
    "hatchback":[],
    "luxury":[],
    "electric":[],
    "muv":[]
}

//brand data
let popularBrands=[];

async function fetchPopularCars() {
    //for suv
    try {
        const response = await fetch(`${baseUrl}car/bodytype?bodyType=SUV&page=0&size=10`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //check data
        if(data.failure){
            throw new Error('Data fetch failed');
        }

        popularCars.suv=data.content.content;
        renderPopularCars(popularCars.suv);
        console.log("SUV Cars:")
        console.log(popularCars.suv);
        
        // popularCars.suv=data.content;
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
    //for sedan
    try {
        const response = await fetch(`${baseUrl}car/bodytype?bodyType=Sedan&page=0&size=10`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //check data
        if(data.failure){
            throw new Error('Data fetch failed');
        }

        popularCars.sedan=data.content.content;
        console.log("Sedan Cars:")
        console.log(popularCars.sedan);
        
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
    //for hatchback
    try {
        const response = await fetch(`${baseUrl}car/bodytype?bodyType=Hatchback&page=0&size=10`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //check data
        if(data.failure){
            throw new Error('Data fetch failed');
        }

        popularCars.hatchback=data.content.content;
        console.log("Hatchback Cars:")
        console.log(popularCars.hatchback);
        
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
    //for luxury
    try {
        const response = await fetch(`${baseUrl}car/bodytype?bodyType=Luxury&page=0&size=10`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //check data
        if(data.failure){
            throw new Error('Data fetch failed');
        }

        popularCars.luxury=data.content.content;
        console.log("Luxury Cars:")
        console.log(popularCars.luxury);
        
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
    //for electric
    try {
        const response = await fetch(`${baseUrl}car/bodytype?bodyType=Electric&page=0&size=10`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //check data
        if(data.failure){
            throw new Error('Data fetch failed');
        }

        popularCars.electric=data.content.content;
        renderElectricCars(popularCars.electric);
        console.log("Electric Cars:")
        console.log(popularCars.electric);
        
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
    //for muv
    try {
        const response = await fetch(`${baseUrl}car/bodytype?bodyType=MUV&page=0&size=10`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //check data
        if(data.failure){
            throw new Error('Data fetch failed');
        }

        popularCars.muv=data.content.content;
        console.log("MUV Cars:")
        console.log(popularCars.muv);
        
    } catch (error) {
        console.error('Error fetching car data:', error);
    }
}

async function fetchPopularBrands(){
    console.log("Fetching popular brands");
    try{
        const respone=await fetch(`${baseUrl}brand/all?page=0&size=10`);
        if(!respone.ok){
            throw new Error('Network response was not ok');
        }
        const data=await respone.json();
        //check data
        if(data.failure){
            throw new Error('Data fetch failed');
        }

        popularBrands=data.content.content;
        renderPopularBrands(popularBrands);
        console.log("Popular Brands:")
        console.log(popularBrands);
    }catch(error){
        console.error('Error fetching car data:', error);
    }
}

 fetchPopularCars();
 fetchPopularBrands();


function renderPopularCars(cars) {
    console.log("Rendering popular cars:", cars);
    const popularCarsContainer = document.getElementById('popular-cars-carousel');
    popularCarsContainer.innerHTML = ''; // Clear existing content

    if (cars.length === 0) {
        popularCarsContainer.innerHTML = '<p>No cars available</p>';
        return;
    }
    cars.forEach(car => {
        const carCard = new PopularCarCard(car);
        popularCarsContainer.innerHTML += carCard.render();
    });
}

function renderPopularBrands(brands) {
    console.log("Rendering popular brands");
    const popularBrandsContainer = document.getElementById('popular-brands-carousel');
    popularBrandsContainer.innerHTML = ''; // Clear existing content
    brands.forEach(brand => {
        const brandCard = new PopularBrandCard(brand);
        popularBrandsContainer.innerHTML += brandCard.render();
    });
}

function renderElectricCars(cars) {
    console.log("Rendering electric cars:");
    const electricCarsContainer = document.getElementById('electric-cars-carousel');
    electricCarsContainer.innerHTML = ''; // Clear existing content
    cars.forEach(car => {
        const carCard = new PopularCarCard(car);
        electricCarsContainer.innerHTML += carCard.render();
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    const popularCarsNavContainer=document.querySelector('.popular-cars > nav > ul');
    popularCarsNavContainer.addEventListener('click', (event) => {
        
        const target = event.target;
        if(target.tagName === 'LI') {
            // Remove active border from all li elements
            const allItems = popularCarsNavContainer.querySelectorAll('li');
            allItems.forEach(item => {
                item.classList.remove('border-b-4', 'border-b-red-500');
            });
            // Add active border to the clicked li element
            target.classList.add('border-b-4', 'border-b-red-500');

            const selectedBodyType = target.getAttribute('body-type');
            console.log(`Selected body type: ${selectedBodyType}`);
            renderPopularCars(popularCars[selectedBodyType]);
        }
    });
    
    console.log("Website initialized");
    
});