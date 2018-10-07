(function() {
    let converter = new showdown.Converter();

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
    }

    init();
    $(window).bind("hashchange", init);
})();
