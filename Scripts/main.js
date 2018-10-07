(function() {
    let converter = new showdown.Converter();

    let getParameterByName = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[#?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    let getHashParameterByName = (name) => {
        if(window.location.hash) {
            return getParameterByName(name, window.location.hash);;
        } else {
            return null;
        }
    };

    let init= () => {
        let post = getHashParameterByName("post");
        let lang = getHashParameterByName("lang");
        lang = lang || "es-mx";
        post = post || "test";
        loadPost(lang, post);
        loadSticky(post);
    }

    /**
     * Load post on the page
     * @param {string} name 
     */
    let loadPost = (lang, name) => {
        readTextFile(`../Post/${lang}/${name}.md`, function(markdown) {
            html = converter.makeHtml(markdown),
            main = document.getElementById("main");
            main.innerHTML = html;
        });
    }

    /**
     * Load Sticky on the page
     * @param {string} name 
     */
    let loadSticky = (name) => {
        let url = `../Post/Sticky/${name}.md`;
        if (!UrlExists(url)){
            url = `../Post/Sticky/default.md`;
        }
        readTextFile(url, function(markdown) {
            html = converter.makeHtml(markdown),
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

    init();
    $(window).bind("hashchange", init);
})();
