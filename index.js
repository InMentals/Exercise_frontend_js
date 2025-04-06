function drawAds() {
  const ads = [{
    name: 'Volkswagen Golf',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus',
    price: 40,
    sell: true,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvs5YLVeWEKWQiTcEKPiShCShCHodsBaZqw&s'
  },
  {
    name: 'JBL speaker',
    description: 'Lorem ipsum dolor sit amet.',
    price: 10,
    sell: true,
    image:'https://m.media-amazon.com/images/I/71H-CPzgkhL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Philips shaver',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibuss',
    price: 5,
    sell: true,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgt_yvXmdtTrEgZUj7tH6EjN6xOftqb8XHg&s'
  },
  {
    name: 'HP laptop',
    description: 'the best one',
    price: 600,
    sell: false,
    image:'https://www.hp.com/es-es/shop/Html/Merch/Images/c08710495_1750x1285.jpg'
  }];
  const container = document.querySelector(".adv-container")

  // 1- recorrer el array de tweets
  ads.forEach((ad) => {
    // 2- por cada uno de los tweets, crear una estructura HTML con sus datos.
    const adHtml = document.createElement("div");
    adHtml.innerHTML = `
      <h2>${ad.name}</h2>
      <p>${ad.description}</p>
      <p>${ad.price}</p>
      <p>${ad.sell}</p>
      <img src="${ad.image}" alt="${ad.name}" WIDTH="200" >
      <p></p>
    `

    // 3- la estructura de Add que he preparado, la mando al DOM.
    container.appendChild(adHtml)
  })
}

drawAds();
