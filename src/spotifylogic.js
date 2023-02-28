

export const getTokenFromURL = () => {
    return window.location.hash
    //retorna la parte  ancla de un URL.
    //https://www.example.com/test.htm#part2
    //window.location.hash retornará part2
    .substring(1)
    //substrings(1) extrae el primer caracter, e imprime el resto de la cadena
    // hasta el final de
    // const hello = "hello world" , hello.substring(1) retornaria  "ello world"
    .split('&')
    //divide un strings en un array de cadenas, mediante la separacion "&"
    .reduce((initial, item) => {
        //#accesstoken=fdgefgaefg&name=token=spotifyclon1
        //ejecuta una funcion reductora sobre cada elemento del array, y da como un solo valor. 
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
} 

// ["access_token=BQDWQagItlPjpObRcEINrKT_3vQcEm0V16tY8uPW-lLkqNSMlvwXeveSQdU8XrNts75HqP3qgP4GRViBLHWJNDbh8KtJy7EnNEHO5GObawuLNrajKJ43sPM8tYCl21LGX5i_O3tjP9xShzd9FsrfIifNAmc7GnIi27QI18-aUKuyFiESbM5xbY6u5cNte5hRInyh5cvIoO1wuM-1miFvpGcTXQ"]
// ["token_type=Bearer"]
// ["expires_in=3600"]

//parts = [["access_token", ""] ["token_type", ""], ["expires_in", ""]]
//parts[0] = ["access_token", ""]

const endpoint = "https://accounts.spotify.com/authorize"
const ClientID = "54b2b8d8084a4c48a72ac799ea4f1c4b"
const redirectUri = "http://localhost:3000/"
const scopes = ["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"]

export const loginURL = `${endpoint}?client_id=${ClientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`