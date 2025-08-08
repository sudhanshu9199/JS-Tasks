const placesData = [
    {
        img: "/images/Hero.png",
        discount: "20% OFF",
        name: "SC.Shiv Nath",
        location: "Kailash, Himalai"
    },
    {
        img: "/images/Hero2.png",
        discount: "15% OFF",
        name: "SK.Vivek",
        location: "Manali, Himachal"
    },
    {
        img: "/images/Hero3.png",
        discount: "10% OFF",
        name: "SS.Rahul",
        location: "Darjeeling, West Bengal"
    },
    {
        img: "/images/Hero4.png",
        discount: "25% OFF",
        name: "SR.Suman",
        location: "Shimla, Himachal"
    },
    {
        img: "/images/Hero5.png",
        discount: "30% OFF",
        name: "SJ.Ritika",
        location: "Mussoorie, Uttarakhand"
    }
]
let bottomContainer = document.querySelector('.bottom');
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