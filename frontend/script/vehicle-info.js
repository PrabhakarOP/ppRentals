const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';


const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');

console.log("Car ID:", carId);

const car=fetchCar();

  async function fetchCar() {
    console.log("Fetching car data");
    try {
      const response = await fetch(`${baseUrl}car/id?id=${carId}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      //check data
      if(data.failure){
        throw new Error('Data fetch failed');
      }

       let car = data.content;
       console.log("Car data:", car);
       renderImages(car.imagesUrl);
       renderRent(car.pricePerDay);
       renderSpecs(car);
       return car;
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  }

  function renderImages(imagesUrls){   
    console.log("Rendering images"); 
    const imageContainer = document.getElementById('carousel-track');
    imageContainer.innerHTML = ''; // Clear existing content

    imagesUrls.forEach(imageUrl => {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Vehicle Hero';
        imageElement.classList.add('w-full', 'h-full', 'object-cover', 'flex-shrink-0', 'slide');
        imageContainer.appendChild(imageElement);
    });
  }

  function renderRent(rent){
    const priceElement=document.querySelector('.price-value');
    priceElement.textContent=rent;
    console.log(rent);
  }

  function renderSpecs(car){
    const specsContainer=document.querySelector('.specs-container');
    specsContainer.innerHTML='';
    specsContainer.innerHTML=`<h1 class="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4 border-b-2 border-red-500 w-fit mx-auto px-4"><span>${(car.brand + ' ' + car.model).toUpperCase()}</span> SPECIFICATIONS</h1></h1>`;
    for(const key in car.specs){
      if(Object.hasOwnProperty.call(car.specs,key)){
        const specsValue=car.specs[key];
        if(typeof specsValue === 'object' && specsValue != null){
          const specsSection=document.createElement('section');
          specsSection.classList.add('specs-section', 'bg-[#373737]', 'text-white', 'px-[5%]', 'py-4', 'my-[10px]', 'mx-[10px]', 'rounded-md');
          specsSection.innerHTML=`<h2 class="text-xl sm:text-2xl font-bold mb-4 text-red-500">${capitalizeFirstLetter(key)}</h2>`;
          const nestedSpecsHtml=renderNestedSpecs(specsValue);
          const specsHtml=`<div class="specs-container flex flex-col gap-3 sm:gap-4">${nestedSpecsHtml}</div>`;
          specsSection.innerHTML+=specsHtml;
          specsContainer.appendChild(specsSection);
        }  
      }
    }
  }

  function renderNestedSpecs(nestedSpecs){
    let nestedSpecsHtml='';
    for(const key in nestedSpecs){
      if(Object.hasOwnProperty.call(nestedSpecs,key)){
        const nestedSpecsValue=nestedSpecs[key];
        nestedSpecsHtml+=` <div class="specs-card flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-1 border-b-white p-1 gap-1 sm:gap-0">
            <h3 class="text-lg sm:text-xl text-gray-400">${key}</h3>
            <p class="text-black text-base sm:text-lg font-semibold">${nestedSpecsValue}</p>
          </div>`
      }
    }
    return nestedSpecsHtml;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }