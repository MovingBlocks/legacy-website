function selectElement(val) {
    let sel = document.getElementById('OS');
    var opts = sel.options;
    for (var opt, j = 0; opt = opts[j]; j++) {
        if (opt.value == val) {
            sel.selectedIndex = j;
            break;
        }
    }
}

if (navigator.appVersion.indexOf("Win") != -1) {
    selectElement("Windows (64-bit)");
}
if (navigator.appVersion.indexOf("Mac") != -1) {
    selectElement("macOS");
}
if (navigator.appVersion.indexOf("Linux") != -1) {
    selectElement("Linux (64-Bit)");
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.github.com/repos/MovingBlocks/TerasologyLauncher/releases/tags/v4.0.0-rc.4", true);
xmlhttp.send();

function downloadPackage() {
    let OS = "";
    let selectedOS = document.getElementById('OS').options[document.getElementById('OS').selectedIndex].value;
    switch (selectedOS) {
        case "macOS":
            OS = "mac";
            break;
        case "Windows (64-bit)":
            OS = "windows64";
            break;
        case "Windows (32-bit)":
            OS = "windows32";
            break;
        case "Linux (64-Bit)":
            OS = "linux64";
            break;
        case "Linux (32-Bit)":
            OS = "linux32";
            break;
    }
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.response);
        data.assets.forEach(element => {
            if (element.name.indexOf(OS) != -1) {
                window.location = element.browser_download_url;
            }
        });
    }
}
