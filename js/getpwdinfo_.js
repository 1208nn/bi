getRemoteData("https://insiders.brothers.gq/safedata.html/",noteData);
function noteData() {
    if (xmlHttp.readyState == 4) {
        document.getElementById("source").value = xmlHttp.responseText;
    }
}
