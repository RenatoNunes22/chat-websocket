export function setCookie(key, value) {
  document.cookie = `${key}=${value};path=/`;
}

export function getCookie(key) {
  return document.cookie
    .split(";")
    .find((cookie) => {
      cookie.startsWith(`${key}=`);
    })
    ?.split("=")[1];
}
