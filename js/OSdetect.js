if (navigator.appVersion.indexOf("Win") != -1) {
    document.getElementById('OS').selectedIndex = 1;
}
if (navigator.appVersion.indexOf("Mac") != -1) {
    document.getElementById('OS').selectedIndex = 0;
}
if (navigator.appVersion.indexOf("Linux") != -1) {
    document.getElementById('OS').selectedIndex = 2;

}
function call() {
    var s = "";
    var bit = (document.getElementById('Bit').selectedIndex == 0);
    switch (document.getElementById('OS').selectedIndex) {
        case 0:
            s += "mac";
            break;
        case 1:
            s += "windows";
            if (bit) {
                s += "64";
            } else {
                s += "32";
            }
            break;
        case 2:
            s += "linux";
            if (bit) {
                s += "64";
            } else {
                s += "32";
            }
            break;

    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.response);
            data.assets.forEach(element => {
                if (element.name.indexOf(s) != -1) {
                    window.location = element.browser_download_url;
                }
            });
        }
    };

    xmlhttp.open("GET", "https://api.github.com/repos/MovingBlocks/TerasologyLauncher/releases/tags/v4.0.0-rc.2", true);
    xmlhttp.send();

}



