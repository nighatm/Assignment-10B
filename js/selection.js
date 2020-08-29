
var select = Cookies.get("cookieSet");
var selction = document.getElementById("select");
selction.innerHTML = "you chose " +select    +"        Pokemon";


function removeCookie()
{
    Cookies.remove("cookieSet");
    window.open("index.html");
}