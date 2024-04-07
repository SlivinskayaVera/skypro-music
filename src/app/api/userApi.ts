const API_URL = "https://skypro-music-api.skyeng.tech/user";

// регистрация

type UserDataType = {
  email: string;
  password: string;
  userName?: string;
};

export async function signUp({ email, password, userName }: UserDataType) {
  const response = await fetch(`${API_URL}/signup/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: userName,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const userData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(userData));
  }

  return userData;
}

export async function signIn({ email, password }: UserDataType) {
  const response = await fetch(`${API_URL}/login/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const userData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(userData));
  }

  return userData;
}

export async function getTokens({ email, password }: UserDataType) {
  const response = await fetch(`${API_URL}/token/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const tokens = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(tokens));
  }

  return tokens;
}

export async function refreshTokens({ token }: {token : string}) {
  const response = await fetch(`${API_URL}/token/refresh/`, {
    method: "POST",
    body: JSON.stringify({
      refresh: token,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const freshToken = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(freshToken));
  }

  return freshToken.access;
}
