class PopularCarCard {
    constructor(car) {
        this.car = car;
    }

    render() {
        return `
            <div class="car-card w-[280px] sm:w-[300px] bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-2 border-red-500">
                <a href="html/vehicle-info.html">
                    <img src="${this.car.photoUrl}" alt="${this.car.brand + ' ' + this.car.model}" class="w-full aspect-square object-cover">
                </a>
                <div class="p-4">
                    <a href="html/vehicle-info.html">
                        <h3 class="text-xl font-semibold mb-2">${this.car.brand + ' ' + this.car.model}</h3>
                    </a>
                    <p class="text-gray-600 mb-4">Rent-${this.car.pricePerDay} Rs/day</p>
                    <button class="bg-red-500 text-white hover:bg-red-600 font-bold px-4 py-2 rounded-md w-full">
                        Rent now
                    </button>
                </div>
            </div>
        `;
    }
}