if (navigator.appVersion.indexOf("Win") != -1) {
    document.getElementById('OS').selectedIndex = 2;
}
if (navigator.appVersion.indexOf("Mac") != -1) {
    document.getElementById('OS').selectedIndex = 0;
}
if (navigator.appVersion.indexOf("Linux") != -1) {
    document.getElementById('OS').selectedIndex = 4;

}
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.github.com/repos/MovingBlocks/TerasologyLauncher/releases/tags/v4.0.0-rc.2", true);
xmlhttp.send();
function downloadPackage() {
    let s = "";
    
    switch (document.getElementById('OS').selectedIndex) {
        case 0:
            s = "mac";
            break;
        case 1:
            s = "mac";
            break;
        case 2:
            s = "windows64";
            break;
        case 3:
            s = "windows32";
            break;
        case 4:
            s = "linux64";
            break;
        case 5:
            s = "linux32";
            break;
    }


        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.response);
            data.assets.forEach(element => {
                if (element.name.indexOf(s) != -1) {
                    window.location = element.browser_download_url;
                }
            });
        }
}



