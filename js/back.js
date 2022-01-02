function back_home(){
    if (document.referrer === ''){
        location.href = "https://insiders.brothers.gq";
    } else {
        history.back(-1);
    }
}
