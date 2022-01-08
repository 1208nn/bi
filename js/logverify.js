function logverify() {
    getIpInfo();
    var utoken = getCookie("token");
    var ip = document.getElementById("userAgentIp").innerHTML;
    if (!(utoken == "{{ site.pwd }}{{ site.token }}" && {% include iplist.dat %})){
        location.href = ("https://insiders.brothers.gq/login/");
    }
}
