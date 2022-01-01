function login() {
    var pwd = document.getElementById("pwd").value;
    var ip = document.getElementById("userAgentIp").innerHTML;
    if ({ % include iplist.html %}) {
        location.href = "http://magazine.brothers.gq";
    } else {
        alert('Wrong Password/IP');
    }
}
