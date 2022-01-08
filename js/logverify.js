function logverify() {
    var utoken = getCookie("token");
    var ip = document.getElementById("userAgentIp").innerHTML;
    if (utoken != "{{ site.pwd }}{{ site.token }}" || ! {% include iplist.dat %}){
        setCookie("token","",5);
        document.getElementById("ulogstate").innerHTML="<a href=\"https://insiders.brothers.gq/login/\">Login</a>";
    } else {
        document.getElementById("ulogstate").innerHTML="Logged <a href=\"javascript:setCookie(\"token\",\"\",5);\">Logout</a><meta http-equiv=\"refresh\" content=\"0;url= / \">";
    }
}
//location.href = ("https://insiders.brothers.gq/login/");
