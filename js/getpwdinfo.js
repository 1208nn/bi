var paramObj = {
	httpUrl : 'https://insiders.brothers.gq/safedata.html/',
	type : 'get'
}
httpRequest(paramObj,function(respondDada)) {
    var pwdl = "pwd=\"";
    var tokenl = "token=\"";
    var ca = respondDada.split('\"');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(pwdl)==0) {pwd = c.substring(pwdl.length,c.length); }
    }
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(tokenl)==0) {token = c.substring(tokenl.length,c.length); }
    }
},function() {
	alert('Network Error. ')
});
