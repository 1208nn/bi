function logverify(logintime , utoken) {
    var token = {{ site.token }};
    //var ip = 
    var time = getTime() - logintime;
    if ((time > 3600000)||!(token == utoken)){
        alert ("Please login again. ");
        
    }
}
