export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    { cache: "no-cache" }
  );

  // method можно не прописывать, по умолчанию GET

  if (!response.ok) {
    throw new Error("ошибка");
  }
  const responseData = await response.json();
  return responseData;
}

export async function getPlaylist() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/selection/"
  );

  if (!response.ok) {
    throw new Error("ошибка");
  }
  const responseData = await response.json();
  return responseData;
}
