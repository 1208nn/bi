function logverify() {
    alert("a");
    var utoken = getCookie("token");
    alert("a");
    var ip = document.getElementById("userAgentIp").innerHTML;
    alert("a");
    if (utoken != "{{ site.pwd }}{{ site.token }}" || ! {% include iplist.dat %}){
            alert("a");setCookie("token","",5);
            alert("a");document.getElementById("ulogstate").innerHTML="<a href=\"https://insiders.brothers.gq/login/\">Login</a>";
    } else {
            alert("a");document.getElementById("ulogstate").innerHTML="Logged <a href=\"javascript:setCookie(\"token\",\"\",5);\">Logout</a><meta http-equiv=\"refresh\" content=\"0;url= / \">";
    }
}
//location.href = ("https://insiders.brothers.gq/login/");
