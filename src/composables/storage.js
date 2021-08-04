const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";

export const storage = () => {
  const saveTokens = (payload) => {
    window.localStorage.setItem(ACCESS_TOKEN, payload.access_token);
    window.localStorage.setItem(REFRESH_TOKEN, payload.refresh_token);
  };

  const removeTokens = () => {
    window.localStorage.removeItem(ACCESS_TOKEN);
    window.localStorage.removeItem(REFRESH_TOKEN);
  };

  const getAccessToken = () => {
    return window.localStorage.getItem(ACCESS_TOKEN);
  };

  const getRefreshToken = () => {
    return window.localStorage.getItem(REFRESH_TOKEN);
  };

  return { saveTokens, removeTokens, getAccessToken, getRefreshToken };
};
