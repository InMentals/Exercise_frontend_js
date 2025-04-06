export async function getAds() {
  const response = await fetch('http://localhost:8000/api/ads');
  const ads = await response.json();
  return ads;
}