function checkEmail(txt) {
    txt = txt.split(' '). join('');
        if (txt.indexOf("@")) {
            return true;
        }     
}

function checkSpace(txt) {
     txt = txt.split(' '). join('');
    return txt.substring(0);    
}