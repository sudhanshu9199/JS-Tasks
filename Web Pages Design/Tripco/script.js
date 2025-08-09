const placesData2 = [
    {
        img: "/images/place_1.png",
        discount: "10% OFF",
        name: "Varanasi Ghats",
        location: "Varanasi, Uttar Pradesh, IN"
    },
    {
        img: "/images/place_2.jpg",
        discount: "15% OFF",
        name: "Golden Temple",
        location: "Amritsar, Punjab, IN"
    },
    {
        img: "/images/place_3.avif",
        discount: "10% OFF",
        name: "Qutub Minar",
        location: " Delhi, IN"
    },
    {
        img: "/images/place_4.jpg",
        discount: "25% OFF",
        name: "Goa Beaches",
        location: "Goa, Calangute, Baga, Anjuna, IN"
    },
    {
        img: "/images/place_5.webp",
        discount: "30% OFF",
        name: "Backwaters of Kerala",
        location: "Alleppey & Kumarakom, Kerala, IN"
    },
    // {
    //     img: "/images/place_6.jpg",
    //     discount: "30% OFF",
    //     name: "Hampi Ruins",
    //     location: "Hampi, Karnataka IN"
    // },
]
let bottomContainer = document.querySelector('.bottom2');
placesData2.forEach(place => {
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


let details3 = [
    {
        num: 1,
        sub: 'Find trips that fit your freedom',
        info: 'Travelling offers freedom and flexibility satitude and spontenetity, and privacy and purpose',
    },
    {
        num: 2,
        sub: 'Get back to nature by travel',
        info: "The world is a playground and you can finally explore Mother Nature's inimtable canvas.",
    },
    {
        num: 3,
        sub: "Reignite those travel tastebuds",
        info: "There are infinite reasons to love travel, one of them being the food, grorious food."
    }
]

let left3 = document.querySelector('.left3');

details3.forEach(detail => {
let box3 = document.createElement('div');
box3.className = 'leftBox3';
box3.innerHTML = `<p class="num3 n-${detail.num}">${detail.num}</p>
                <p class="sub3">${detail.sub}</p>
                <p class="info3">${detail.info}</p>`;

left3.appendChild(box3);
});

let btn3 = document.createElement('div');
btn3.className = 'btn3';
btn3.textContent = 'Start your explore';
left3.appendChild(btn3);


// let usersInfo = [
//     {
//         dp: '/image/user_1.png',
//         name: 'Karan Duba',
//         rate: 4.9,
//     },
//     {
//         dp: '/image/user_2.png',
//         name: 'Kiara Saho',
//         rate: 4.6,
//     },
//     {
//         dp: '/image/user_3.png',
//         name: 'Suhana Kar',
//         rate: 4.8,
//     }
// ]


const placesData4 = [
    {
        img: "https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1742821230775-untitled%20-%202025-03-24T182555.537.jpg&w=1920&q=75",
        rate: "4.8",
        name: "Ajanta & Ellora Caves",
        location: "Aurangabad, Maharashtra, IN",
        price: "₹3,500"
    },
    {
        img: "https://static.toiimg.com/thumb/109001676/Rafting-in-Rishikesh.jpg?width=636&height=358&resize=4",
        rate: "4.5",
        name: "Rishikesh (River Rafting)",
        location: "Rishikesh, Uttarakhand, IN",
        price: "₹2,200"
    },
    {
        img: "https://vargiskhan.com/log/wp-content/uploads/2017/08/leh-to-pangong-lake-1.jpg",
        rate: "4.2",
        name: "Leh & Pangong Lake",
        location: "Ladakh, Jammu & Kashmir, IN",
        price: "₹8,000"
    },
    {
        img: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/23/6637aafe36050ae25c5c1f50d807ddc6_1000x1000.jpg",
        rate: "4.9",
        name: "Darjeeling Toy Train",
        location: "Darjeeling, West Bengal, IN",
        price: "₹1,500"
    },
    {
        img: "https://www.munnar.holiday/munnartourism/wp-content/uploads/2023/04/Best-Munnar-Tea-Estates.png",
        rate: "4.5",
        name: "Munnar Tea Gardens",
        location: "Munnar, Kerala, IN",
        price: "₹2,800"
    },
    {
        img: "https://media1.thrillophilia.com/filestore/t2zfl63gyeb8yrgmqsp1jhysom00_shutterstock_1246346662-min.jpg?w=auto&h=600",
        rate: "4.5",
        name: "Ranthambore National Park",
        location: "Sawai Madhopur, Rajasthan, IN",
        price: "₹3,000"
    },
    {
        img: "https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Konark%20Sun%20TripSavvy--dc74c9.jpg",
        rate: "4.5",
        name: "Konark Sun Temple",
        location: "Konark, Odisha, IN",
        price: "₹1,200"
    },
    {
        img: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/f3966004be85ac83b66b11a0213611aa_1000x1000.jpeg",
        rate: "4.5",
        name: "Andaman & Nicobar Islands",
        location: "Bay of Bengal, IN",
        price: "₹12,000"
    },
    {
        img: "https://www.thomascook.in/blog/wp-content/uploads/2018/05/kaziranga-is-the-british-1.jpg",
        rate: "4.5",
        name: "Kaziranga National Park",
        location: "Kaziranga, Assam, IN",
        price: "₹2,500"
    },
    {
        img: "https://goboundless.co/wp-content/uploads/2023/09/ruuunn.png",
        rate: "4.5",
        name: "Rann of Kutch",
        location: "Kutch, Gujarat, IN",
        price: "₹4,000"
    },
];


const placesDiv4 = document.querySelector('.placesDiv4');

placesData4.forEach(places4 => {
    const placeCard = document.createElement('div');
    placeCard.classList.add('place4');
    placeCard.innerHTML = `<div class="image4">
            <img src="${places4.img}" alt="">
          </div>
          <div class="rating4">
            <i class="ri-star-s-fill"></i>
            <p>${places4.rate}</p>
          </div>
          <div class="info4">
            <div class="spotInfo4">
              <p class="name4">${places4.name}</p>
              <div class="location4">
                <i class="ri-map-pin-fill"></i>
                <p>${places4.location}</p>
              </div>
            </div>
            <p class="price4"><span>${places4.price}/</span>pack</p>
          </div>`;

    placesDiv4.appendChild(placeCard);
})