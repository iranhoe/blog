let converter = new showdown.Converter();

/**
 * Load post on the page
 * @param {string} name 
 */
export let loadPost = (lang, name) => {
    readTextFile(`../Post/${lang}/${name}.md`, function(markdown) {
        let html = converter.makeHtml(markdown),
        main = document.getElementById("main");
        main.innerHTML = html;
    });
}

/**
 * Load Sticky on the page
 * @param {string} name 
 */
export let loadSticky = (name) => {
    let url = `../Post/Sticky/${name}.md`;
    if (!UrlExists(url)){
        url = `../Post/Sticky/default.md`;
    }
    readTextFile(url, function(markdown) {
        let html = converter.makeHtml(markdown),
        main = document.getElementById("sticky");
        main.innerHTML = html;
    });
}

let readTextFile = (file, callback) => {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", file, true);
    xmlHttpRequest.onreadystatechange = function ()
    {
        if(xmlHttpRequest.readyState === 4)
        {
            if(xmlHttpRequest.status === 200 || xmlHttpRequest.status == 0)
            {
                var allText = xmlHttpRequest.responseText;
                callback(allText);
            }
        }
    }
    xmlHttpRequest.send(null);
}

let UrlExists = url => {
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false)
    http.send();
    return http.status != 404;
}