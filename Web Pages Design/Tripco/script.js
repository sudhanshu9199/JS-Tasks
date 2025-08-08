const placesData = [
    {
        img: "/images/Hero.png",
        discount: "10% OFF",
        name: "Varanasi Ghats",
        location: "Varanasi, Uttar Pradesh, IN"
    },
    {
        img: "/images/Hero2.png",
        discount: "15% OFF",
        name: "Golden Temple",
        location: "Amritsar, Punjab, IN"
    },
    {
        img: "/images/Hero3.png",
        discount: "10% OFF",
        name: "Qutub Minar",
        location: " Delhi, IN"
    },
    {
        img: "/images/Hero4.png",
        discount: "25% OFF",
        name: "Goa Beaches",
        location: "Goa, Calangute, Baga, Anjuna, IN"
    },
    {
        img: "/images/Hero5.png",
        discount: "30% OFF",
        name: "Backwaters of Kerala",
        location: "Alleppey & Kumarakom, Kerala, IN"
    },
    {
        img: "/images/Hero5.png",
        discount: "30% OFF",
        name: "Hampi Ruins",
        location: "Hampi, Karnataka IN"
    },
    {
        img: "/images/Hero5.png",
        discount: "30% OFF",
        name: "Hampi Ruins",
        location: "Hampi, Karnataka IN"
    }
]
let bottomContainer = document.querySelector('.bottom2');
placesData.forEach(place => {
    const placeDiv = document.createElement('div');
    placeDiv.className = 'place';

    placeDiv.innerHTML = `
        <div class="image">
            <img src="${place.img}" alt="">
        </div>
        <p class="discount">${place.discount}</p>
        <p class="name">${place.name}</p>
        <div class="location">
            <i class="ri-map-pin-fill"></i>
            <p>${place.location}</p>
        </div>
    `;

    bottomContainer.appendChild(placeDiv);
});