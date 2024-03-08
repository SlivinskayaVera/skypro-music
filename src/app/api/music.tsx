export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );

  // method можно не прописывать, по умолчанию GET

  if (!response.ok) {
    throw new Error("ошибка");
  }
  const responseData = await response.json();
  return responseData;
}
