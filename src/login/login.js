const CLIENT_ID = "3395009955bc488faf738eb36906454a";
const scopes = "user-top-read user-follow-read playlist-read-private user-library-read";
const REDIRECT_URL = "http://localhost:3000/login/login.html";
const ACCESS_TOKEN_KEY = "accessToken";
const APP_URL = "http://localhost:3000"

const authorizeUser = ()=> {
    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}&scope=${scopes}&show_dialog=true`;
    window.open(url,"login","width=800, height=600")
}

document.addEventListener("DOMContentLoaded", ()=>{
    const loginButton = document.getElementById("login-to-spotify");
    loginButton.addEventListener("click",authorizeUser);


})

window.addEventListener("load", () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if(accessToken){
        window.location.href = `${APP_URL}/dashboard/dashboard.html`;
    }
    if(!window.opener && !window.opener.closed){
        window.focus();
        if(window.location.href.includes("error")){
            window.close();
        }
        console.log(window.location.hash)
    }
})