function noStyles() {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = true;
    document.styleSheets[2].disabled = true;
    document.styleSheets[3].disabled = true;
    document.styleSheets[4].disabled = true;

}

function reStyle(n) {
    noStyles();
    document.styleSheets[n].disabled = false;

}

reStyle(0);