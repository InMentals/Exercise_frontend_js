import { getAds } from './showAdsModel.js'
import { buildAd, buildNoAdsAdvice } from './showAdsView.js';

export async function showAdsController() {

  try {
    const ads = await getAds();
    drawAds(ads);
  } catch (error) {
    alert(error.message);
  }
}



function drawAds(ads) {
  const container = document.querySelector(".adv-container");
  container.innerHTML = ""; 
  if (ads.length === 0) {
    container.innerHTML = buildNoAdsAdvice();
  }
  ads.forEach((ad) => {
    const adHtml = document.createElement("div");
    adHtml.innerHTML = buildAd(ad);
    container.appendChild(adHtml);
  });
}

