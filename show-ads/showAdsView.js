export const buildAd = (ad) => {
 let adView =  `
      <h2>${ad.name}</h2>
      <p>${ad.description}</p>
      <p>${ad.price}</p>
      <p>${ad.sell}</p>
      <img src="${ad.image}" alt="${ad.name}" WIDTH="200" >
      `;
  return adView;
}


export const buildNoAdsAdvice = () => {
  return '<h3>We are sorry, there are no ads available!</h3>'
}