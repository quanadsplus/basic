export function setCookie(key, value, days = 1) {
    let expires = null;
    let date = new Date();
  
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "expires=" + date.toUTCString();
  
    document.cookie = `${key}=${value}; ${expires}; path=/`;
  }
  
  export function getCookie(key) {
    let cookies = document.cookie.split(";");
    let cookie = cookies.reduce((result, item) => {
      let itemSplit = item.trim().split("=");
  
      if (itemSplit[0] == key) {
        return itemSplit[1];
      }
  
      return result;
    }, "");
  
    return cookie;
  }
  
  export function eraseCookie(key) {
    document.cookie = `${key}=; Max-Age=-99999999;`;
  }
  