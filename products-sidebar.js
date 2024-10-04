function relevance() {
  let dropdown = document.querySelector("#relevance");
  let content = document.querySelector("#relevance-content");

  dropdown.classList.toggle("active");
}

function brand() {
  let dropdown = document.querySelector("#brand");
  let content = document.querySelector("#brand-content");

  dropdown.classList.toggle("active");
}

function price() {
  let dropdown = document.querySelector("#price");
  let content = document.querySelector("#price-content");

  dropdown.classList.toggle("active");
}

function category() {
  let dropdown = document.querySelector("#category");
  let content = document.querySelector("#category-content");

  dropdown.classList.toggle("active");
}

function discount() {
  let dropdown = document.querySelector("#discount");
  let content = document.querySelector("#discount-content");

  dropdown.classList.toggle("active");
}

function rating() {
  let dropdown = document.querySelector("#rating");
  let content = document.querySelector("#rating-content");

  dropdown.classList.toggle("active");
}

function colors() {
  let dropdown = document.querySelector("#colors");
  let content = document.querySelector("#colors-content");

  dropdown.classList.toggle("active");
}

function gender() {
  let dropdown = document.querySelector("#gender");
  let content = document.querySelector("#gender-content");

  dropdown.classList.toggle("active");
}

function age_group() {
  let dropdown = document.querySelector("#age_group");
  let content = document.querySelector("#age_group-content");

  dropdown.classList.toggle("active");
}

function origin_country() {
  let dropdown = document.querySelector("#origin_country");
  let content = document.querySelector("#origin_country-content");

  dropdown.classList.toggle("active");
}

let bag = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Handbag, Fits 15",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "womens",
    image: "Assests\\Products\\product-1.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Womens Casual Premium Slim handbag Purse ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "womens",
    image: "Assests\\Products\\product-2.png",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Womens Makeup Box",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "womens",
    image: "Assests\\Products\\product-3.png",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Womens Premium Stylish Handbag New Era",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "womens",
    image: "Assests\\Products\\product-4.png",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Womens New Era Side Bags - Leather Finish",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "womens",
    image: "Assests\\Products\\product-5.png",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "Assests\\Products\\product-14.png",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "Assests\\Products\\product-15.png",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "Assests\\Products\\product-16.png",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "White Purse for Womens - Ruskin",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "womens",
    image: "Assests\\Products\\product-6.png",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Pink Coloured Nailpaint For Womens - Matt",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "cosmetic",
    image: "Assests\\Products\\product-8.png",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Scent for Womens - Combo of 3 packs",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "cosmetic",
    image: "Assests\\Products\\product-11.png",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "Car Key Bag for Car keys",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "cars",
    image: "Assests\\Products\\product-12.png",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Beutiful Pillow - White, Comfort",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "accescories",
    image: "Assests\\Products\\product-13.png",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title: "Mobile Pouch - For 6 inches or less smartphones",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "Assests\\Products\\product-17.png",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "Assests\\Products\\product-18.png",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "Assests\\Products\\product-19.png",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "Assests\\Products\\product-20.png",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "Assests\\Products\\product-21.png",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "Assests\\Products\\product-22.png",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "Assests\\Products\\product-23.png",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

function addProductCards(bag) {
  document.querySelector("#products-cards").innerHTML = "";
  bag.forEach((elem) => {
    let card = document.createElement("div");
    card.id = "product-card";

    let image = document.createElement("img");
    image.src = elem.image;

    let title = document.createElement("h4");
    title.innerText = elem.title;

    let price = document.createElement("p");
    price.innerText = `$${elem.price}`;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${elem.rating.rate}`;

    let star = document.createElement("span");
    star.innerHTML = '<i class="fa-solid fa-star"></i>';
    rating.append(star);

    let rating_count = document.createElement("span");
    rating_count.innerText = ` (${elem.rating.count})`;

    rating.append(rating_count);

    let button_fvrt_cont = document.createElement("div");
    button_fvrt_cont.classList.add("product-card-btn");

    let fvrt = document.createElement("div");
    fvrt.classList.add("card-fvrt-btn");
    fvrt.innerHTML = '<i class="fa-solid fa-heart"></i>';

    let add_to_cart_btn = document.createElement("div");
    add_to_cart_btn.classList.add("card-add-to-cart-btn");
    add_to_cart_btn.innerText = "Add To Cart";

    document.querySelector("#products-cards").append(card);
    card.append(image, title, price, rating, button_fvrt_cont);
    button_fvrt_cont.append(fvrt, add_to_cart_btn);
  });
}

function tosort() {
  let select = document.querySelector(
    'input[name = "relevance"]:checked'
  ).value;

  if (select == "Low-to-high") {
    bag.sort((elem1, elem2) => elem1.price - elem2.price);
  } else if (select == "High-to-low") {
    bag.sort((elem1, elem2) => elem2.price - elem1.price);
  }
  addProductCards(bag);
}

function search() {
  let search_value = document.querySelector("#navbar-search").value;

  let new_data = bag.filter((elem) => {
    return elem.title.toLowerCase().includes(search_value.toLowerCase());
  });

  addProductCards(new_data);
}

addProductCards(bag);
