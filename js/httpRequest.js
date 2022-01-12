//直接通过XMLHttpRequest对象获取远程网页源代码
function getRemoteData(url,func) {
    //地址为空时
    if (url == "") () {
        console.log("Empty URL Error. ");
        return;
    }
    //根据window.XMLHttpRequest对象是否存在使用不同的创建方式
    if (window.XMLHttpRequest) {
       xmlHttp = new XMLHttpRequest();                  //FireFox、Opera等浏览器支持的创建方式
    } else {
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");//IE浏览器支持的创建方式
    }
    xmlHttp.onreadystatechange = func;                   //设置回调函数
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}
/*
function noteData() {
    if (xmlHttp.readyState == 4) {
        document.getElementById("source").value = xmlHttp.responseText;
    }
}
*/
