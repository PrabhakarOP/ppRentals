class PopularBrandCard {
    constructor(brand) {
      this.brand = brand;
    }
  
    render() {
      return `
        <div class="brand-card w-[140px] sm:w-[150px] h-fit bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-2 border-red-500">
          <img src="${this.brand.logoUrl}" alt="${this.brand.name}" class="w-full aspect-[2/1] object-cover">
          <div class="w-full flex items-center justify-center">
            <h3 class="text-xl font-semibold">${this.brand.name}</h3>
          </div>
        </div>
      `;
    }
  }