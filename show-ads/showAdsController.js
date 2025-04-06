import { getAds } from './showAdsModel.js'
import { buildAd, buildNoAdsAdvice } from './showAdsView.js';

export async function showAdsController(container) {

  try {
    const event = new CustomEvent("load-ads-started")
    container.dispatchEvent(event)
    const ads = await getAds();
    drawAds(ads, container);
  } catch (error) {
    alert(error.message);
  }finally{
    const event = new CustomEvent("load-ads-finished")
    container.dispatchEvent(event)
  }
}



function drawAds(ads, container) {
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

