import Cookie from "js-cookie";

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

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  return responseData;
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

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(responseData));
  }

  Cookie.set("user", JSON.stringify(responseData));
  return responseData;
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

  Cookie.set("tokens", JSON.stringify(tokens));

  const dateExpiration = new Date(new Date().getTime() + 200 * 1000);
  // , { HttpOnly: true }

  Cookie.set("tokenRefresh", JSON.stringify(tokens.refresh));
  Cookie.set("tokenAccess", JSON.stringify(tokens.access), {
    expires: dateExpiration,
  });

  console.log(tokens.refresh);

  return tokens;
}

export async function refreshTokens({ token }: { token: string }) {
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

  Cookie.set(
    "tokens",
    JSON.stringify({
      refresh: token,
      access: freshToken.access,
    })
  );

  const dateExpiration = new Date(new Date().getTime() + 200 * 1000);

  Cookie.set("tokensAccess", JSON.stringify(freshToken.access), {
    expires: dateExpiration,
  });

  return freshToken.access;
}
