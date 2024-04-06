export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    { cache: "no-cache" }
  );

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

// Сюда нужно подставить актуальный access токен, т.к. access токен живет только 200 секунд
export function toLikeTrack({
  accessToken,
  id,
}: {
  accessToken: string;
  id: string;
}) {
  fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export function toDislikeTrack({
  accessToken,
  id,
}: {
  accessToken: string;
  id: string;
}) {
  fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export async function getAllFavoriteTracks({
  accessToken,
}: {
  accessToken: string;
}) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const responseData = await response.json();

  if (!response.ok) {
    console.log(responseData);
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}
