import { getAds } from './showAdsModel.js'
import { buildAd, buildNoAdsAdvice } from './showAdsView.js';

export async function showAdsController() {
  
  const container = document.querySelector(".adv-container");
  const ads = await getAds();
  if (ads.length > 0) {
    drawAds(ads, container);
  }else {
    container.innerHTML = buildNoAdsAdvice();
  }
}


function drawAds(ads, container) {
  container.innerHTML = ""; 
  ads.forEach((ad) => {
    const adHtml = document.createElement("div");
    adHtml.innerHTML = buildAd(ad);
    container.appendChild(adHtml);
  });
}

