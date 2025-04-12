class SearchResultsCarCard{
    constructor(car){
        this.car = car;
    }
    
    render(){
        return `<div class="car-card bg-[#373737] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-2 border-red-500">
                            <a href="vehicle-info.html?id=${this.car.id}"><img src="${this.car.photoUrl}" alt="car photo" class="w-full aspect-square object-cover"></a>
                            <div class="p-4">
                                <a href="vehicle-info.html?id=${this.car.id}"><h3 class="text-xl font-semibold mb-2">${this.car.brand + ' ' + this.car.model}</h3></a>
                                <p class="text-red-500 font-bold mb-4">₹${this.car.pricePerDay} / day</p>
                                <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md w-full transition-colors duration-300">
                                    Rent Now
                                </button>
                            </div>
                        </div>`
    }
}