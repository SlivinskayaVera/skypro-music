export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    {
      headers: {
        Authorization: `Bearer {}`
      },
      method: "GET",
    }
  );
}
