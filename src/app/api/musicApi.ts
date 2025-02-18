const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getTracks() {
  const response = await fetch(`${BASE_URL}/catalog/track/all/`, {
    cache: 'no-cache',
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }
  return responseData.data;
}

export async function getPlaylist() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/selection/'
  );

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}

export async function toLikeTrack({
  accessToken,
  id,
}: {
  accessToken: string;
  id: string;
}) {
  const response = await fetch(`${BASE_URL}/catalog/track/${id}/favorite/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return accessToken;
}

export async function toDislikeTrack({
  accessToken,
  id,
}: {
  accessToken: string;
  id: string;
}) {
  const response = await fetch(`${BASE_URL}/catalog/track/${id}/favorite/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return accessToken;
}

export async function getAllFavoriteTracks({
  accessToken,
}: {
  accessToken: string;
}) {
  const response = await fetch(`${BASE_URL}/catalog/track/favorite/all/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
}
