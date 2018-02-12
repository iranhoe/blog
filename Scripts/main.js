(function() {
    var converter = new showdown.Converter();

    function readTextFile(file, callback) {
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
    function loadPost(name) {
        readTextFile("../Post/" + name + ".md", function(markdown) {
            html = converter.makeHtml(markdown),
            main = document.getElementById("main");
            main.innerHTML = html;
        });
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function init() {
        var post = getParameterByName("post");
        loadPost(post);
    }

    init();
})();
