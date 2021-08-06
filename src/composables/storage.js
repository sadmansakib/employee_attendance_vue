const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";

export const storage = () => {
  const saveTokens = (payload) => {
    window.sessionStorage.setItem(ACCESS_TOKEN, payload.access_token);
    window.sessionStorage.setItem(REFRESH_TOKEN, payload.refresh_token);
  };

  const removeTokens = () => {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.removeItem(REFRESH_TOKEN);
  };

  const getAccessToken = () => {
    return window.sessionStorage.getItem(ACCESS_TOKEN);
  };

  const getRefreshToken = () => {
    return window.sessionStorage.getItem(REFRESH_TOKEN);
  };

  return { saveTokens, removeTokens, getAccessToken, getRefreshToken };
};
