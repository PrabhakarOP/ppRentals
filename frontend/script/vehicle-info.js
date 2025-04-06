const baseUrl='https://imperial-nerti-prabhakar-06383824.koyeb.app/api/v1/';


const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get('id');

  console.log("Car ID:", carId);

  let car;

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

       car = data.content;
       console.log("Car data:", car);
       renderImages(car.imagesUrl);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  }

  fetchCar();

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

  